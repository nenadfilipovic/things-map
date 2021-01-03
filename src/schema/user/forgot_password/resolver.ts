import { mail } from 'src/services/mail';
import { GENERIC_ERROR } from 'src/constants';
import { formatDate } from 'src/services/date';
import { User } from 'src/database/models/User';
import { ForgotPasswordResult, Resolvers } from 'src/types';
import { generateRandomToken } from 'src/services/generator';
import { config, resetPasswordTokenMaxAge } from 'src/config';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param param1
     * @param context
     *
     * Initiate forgot password process.
     */

    forgotPassword: async (_, { input }): Promise<ForgotPasswordResult> => {
      /**
       * Prepare data.
       */

      const { email } = input;

      /**
       * Find user for provided email address.
       */

      const [user] = await User.query()
        .allowGraph('[metadata,token]')
        .withGraphJoined('[metadata,token]')
        .where('metadata.email', email)
        .andWhere('metadata.isVerified', true);

      /**
       * Send same response even if user doesn't exist.
       */

      if (user) {
        /**
         * Prepare data.
         */

        const {
          metadata: { email },
        } = user;

        let token = user.token.resetPasswordToken;
        let tokenExpires = user.token.resetPasswordTokenExpires;

        /**
         * Don't create new token if existing one is valid.
         */

        if (token === undefined || tokenExpires < new Date()) {
          /**
           * Generate new token and set its life to 30 minutes.
           */

          token = generateRandomToken();
          tokenExpires = formatDate(Date.now() + resetPasswordTokenMaxAge);

          /**
           * Update user data.
           */

          try {
            await User.transaction(async (trx) => {
              return await user.$relatedQuery('token', trx).patch({
                resetPasswordToken: token,
                resetPasswordTokenExpires: tokenExpires,
              });
            });
          } catch {
            return {
              errors: [{ __typename: 'Error', message: GENERIC_ERROR }],
            };
          }
        }

        /**
         * Send email with token.
         */

        mail.sendMail({
          from: config.EMAIL_USERNAME,
          to: email,
          subject: `Forgot password request`,
          text: `You have requested a new password for account ${email}. No changes have been made to your account yet. 
          \n Please use this token to reset your password: ${token} \n Token is valid until: ${tokenExpires} 
          \n If you did not request a new password, please let us know immediately by replying to this email.`,
        });
      }

      return {
        message: `Thanks! If there's an account associated with this email, we'll send the password reset instructions immediately`,
      };
    },
  },
};

export default resolvers;
