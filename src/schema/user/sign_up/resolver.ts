import { mail } from 'src/services/mail';
import { formatDate } from 'src/services/date';
import { User } from 'src/database/models/User';
import { hashPassword } from 'src/services/password';
import { config, verifyEmailTokenMaxAge } from 'src/config';
import { generateRandomToken } from 'src/services/generator';
import { Resolvers, SignUpResult } from 'src/generated/resolverTypes';
import { buildAuthenticationToken } from 'src/services/authentication';

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

      const {
        email,
        lastName,
        password,
        username,
        firstName,
        countryCode,
      } = input;

      /**
       * Check email.
       */

      const emailTaken = await User.query().findOne({ email });

      if (emailTaken) {
        return {
          message: 'Email address already in use',
        };
      }

      /**
       * Check username.
       */

      const usernameTaken = await User.query().findOne({ username });

      if (usernameTaken) {
        return {
          message: 'Username already in use',
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

      const user = await User.query().insert({
        email,
        username,
        lastName,
        firstName,
        countryCode,
        verifyEmailToken,
        verifyEmailTokenExpires,
        password: await hashPassword(password),
      });

      /**
       * Build authentication token and put them in cookies.
       */

      const payload = {
        id: user.id,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
      };

      buildAuthenticationToken(ctx, payload);

      /**
       * Send verification email to provided email address.
       */

      mail.sendMail({
        from: config.EMAIL_USERNAME,
        to: email,
        subject: `Verify email address`,
        text: `Hello!
          \n Please use provided code below to verify your email address.
          \n Verification code: ${user.verifyEmailToken}
          \n Token is valid until: ${user.verifyEmailTokenExpires}
          \n Have a nice day.`,
      });

      return {
        message:
          'Please check your provided email address for further instructions to activate your account',
      };
    },
  },
};

export default resolvers;
