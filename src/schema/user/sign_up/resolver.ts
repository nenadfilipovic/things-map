import { mail } from 'src/services/mail';
import { formatDate } from 'src/services/date';
import { User } from 'src/database/models/User';
import { hashPassword } from 'src/services/password';
import { config, verifyEmailTokenMaxAge } from 'src/config';
import { generateRandomToken } from 'src/services/generator';
import { Error, Maybe, Resolvers, SignUpResult } from 'src/types';
import { buildAuthenticationToken } from 'src/services/authentication';
import { EMAIL_TAKEN, GENERIC_ERROR, USERNAME_TAKEN } from 'src/constants';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Sign up user and send verification email.
     */

    signUp: async (_, { input }, { ctx }): Promise<SignUpResult> => {
      /**
       * Prepare data.
       */

      const errors: Maybe<Error>[] = [];
      const { email, lastName, password, username, firstName } = input;

      /**
       * Check:
       * - User with provided email already exist and its verified
       * - User with valid verify token for this email already exist
       * - User with valid update email token for this email already exist
       */

      const [emailTaken] = await User.query()
        .allowGraph('[metadata,tokens]')
        .withGraphJoined('[metadata,tokens]')
        .where(function () {
          this.where('metadata.email', email).andWhere(
            'metadata.isVerified',
            true,
          );
        })
        .orWhere(function () {
          this.where('tokens.verifyEmailTokenTarget', email).andWhere(
            'tokens.verifyEmailTokenExpires',
            '>',
            new Date(),
          );
        })
        .orWhere(function () {
          this.where('tokens.updateEmailTokenTarget', email).andWhere(
            'tokens.updateEmailTokenExpires',
            '>',
            new Date(),
          );
        });

      if (emailTaken) {
        errors.push({
          __typename: 'Error',
          message: EMAIL_TAKEN,
          path: 'email',
        });
      }

      /**
       * Check:
       * - There is user with provided username and it is verified
       * - There is user with provided username and still has valid verify token
       */

      const [usernameTaken] = await User.query()
        .allowGraph('[metadata,tokens]')
        .withGraphJoined('[metadata,tokens]')
        .where(function () {
          this.where('username', username).andWhere(
            'metadata.isVerified',
            true,
          );
        })
        .orWhere(function () {
          this.where('username', username).andWhere(
            'tokens.verifyEmailTokenExpires',
            '>',
            new Date(),
          );
        });

      console.log(usernameTaken);

      if (usernameTaken) {
        errors.push({
          __typename: 'Error',
          message: USERNAME_TAKEN,
          path: 'username',
        });
      }

      if (errors.length > 0) {
        return {
          errors,
        };
      }

      /**
       * Generate token to verify email address.
       */

      const verifyEmailToken = generateRandomToken();
      const verifyEmailTokenExpires = formatDate(
        Date.now() + verifyEmailTokenMaxAge,
      );

      /**
       * Save user data.
       */

      try {
        const transaction = await User.transaction(async (trx) => {
          await User.query().where('username', username).delete();
          await User.relatedQuery('metadata').where('email', email).delete();

          return await User.query(trx)
            .allowGraph('[metadata,tokens]')
            .withGraphJoined('[metadata,tokens]')
            .insertGraph({
              firstName,
              lastName,
              username,
              metadata: { email, password: await hashPassword(password) },
              tokens: {
                verifyEmailToken,
                verifyEmailTokenTarget: email,
                verifyEmailTokenExpires,
              },
            });
        });

        /**
         * If transaction was successful we can proceed, if there was
         * error database will restore previous state.
         */

        if (transaction) {
          /**
           * Prepare data.
           */

          const {
            id,
            metadata: { isVerified, email },
            tokens: { verifyEmailToken, verifyEmailTokenExpires },
          } = transaction;

          /**
           * Build authentication token and put them in cookies.
           */

          buildAuthenticationToken(ctx, {
            id,
            isVerified,
          });

          /**
           * Send verification email to provided email address.
           */

          mail.sendMail({
            from: config.EMAIL_USERNAME,
            to: email,
            subject: `Verify email address`,
            text: `Hello!
            \n Please use provided token below to verify your email address.
            \n Verification token: ${verifyEmailToken}
            \n Token is valid until: ${verifyEmailTokenExpires}
            \n Have a nice day.`,
          });
        }
      } catch {
        return {
          errors: [
            {
              __typename: 'Error',
              message: GENERIC_ERROR,
            },
          ],
        };
      }

      return {
        message:
          'Please check your provided email address for further instructions to activate your account',
      };
    },
  },
};

export default resolvers;
