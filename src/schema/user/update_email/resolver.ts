import { mail } from 'src/services/mail';
import { formatDate } from 'src/services/date';
import { User } from 'src/database/models/User';
import { Resolvers, UpdateEmailResult } from 'src/types';
import { EMAIL_TAKEN, GENERIC_ERROR } from 'src/constants';
import { config, verifyEmailTokenMaxAge } from 'src/config';
import { generateRandomToken } from 'src/services/generator';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Update email.
     */

    updateEmail: async (_, { input }, { ctx }): Promise<UpdateEmailResult> => {
      /**
       * Prepare data.
       */

      const { email } = input;
      const id = ctx.state.user?.id;

      /**
       * Check if provided email is taken.
       */

      const [emailTaken] = await User.query()
        .allowGraph('[metadata,token]')
        .withGraphJoined('[metadata,token]')
        .where(function () {
          this.where('metadata.email', email).andWhere(
            'metadata.isVerified',
            true,
          );
        })
        .orWhere(function () {
          this.where('token.updateEmailTokenTarget', email).andWhere(
            'token.updateEmailTokenExpires',
            '>',
            new Date(),
          );
        })
        .orWhere(function () {
          this.where('token.verifyEmailTokenTarget', email).andWhere(
            'token.verifyEmailTokenExpires',
            '>',
            new Date(),
          );
        });

      if (emailTaken) {
        return {
          errors: [{ __typename: 'Error', message: EMAIL_TAKEN }],
        };
      }

      if (id) {
        /**
         * Prepare data.
         */

        const user = await User.query()
          .allowGraph('[metadata,token]')
          .withGraphJoined('[metadata,token]')
          .where('metadata.isVerified', true)
          .findById(id);

        if (!user) {
          return {
            errors: [
              {
                __typename: 'Error',
                message: 'You must be verified user to perform this action',
              },
            ],
          };
        }

        const token = generateRandomToken();
        const tokenExpires = formatDate(Date.now() + verifyEmailTokenMaxAge);

        try {
          await User.transaction(async (trx) => {
            return await user.$relatedQuery('token', trx).patch({
              updateEmailToken: token,
              updateEmailTokenTarget: email,
              updateEmailTokenExpires: tokenExpires,
            });
          });

          /**
           * Send email with token.
           */

          mail.sendMail({
            from: config.EMAIL_USERNAME,
            to: email,
            subject: `Verify email address`,
            text: `Hello!
          \n Please use provided token below to verify your email address.
          \n Verification token: ${token}
          \n Token is valid until: ${tokenExpires}
          \n Have a nice day.`,
          });

          return {
            message:
              'Please check your provided email address for further instructions to verify your new email',
          };
        } catch {
          return {
            errors: [{ __typename: 'Error', message: GENERIC_ERROR }],
          };
        }
      }

      return {
        errors: [{ __typename: 'Error', message: GENERIC_ERROR }],
      };
    },
  },
};

export default resolvers;
