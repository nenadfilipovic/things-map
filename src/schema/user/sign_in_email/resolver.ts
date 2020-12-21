import { User } from 'src/database/models/User';
import { validatePassword } from 'src/services/password';
import { buildAuthenticationToken } from 'src/services/authentication';
import { Resolvers, SignInByEmailResult } from 'src/generated/resolverTypes';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Sign in user with email.
     */

    signInByEmail: async (
      _,
      { input },
      { ctx },
    ): Promise<SignInByEmailResult> => {
      /**
       * Prepare data.
       */

      const { email, password } = input;

      /**
       * Check if user exist.
       */

      const user = await User.query().findOne({ email });

      if (!user) {
        return {
          message: 'Bad email or password, please check your credentials',
        };
      }

      /**
       * Validate password.
       */

      const validPassword = await validatePassword(user.password, password);

      if (!validPassword) {
        return {
          message: 'Bad email or password, please check your credentials',
        };
      }

      /**
       * Create authentication token for user.
       */

      const payload = {
        id: user.id,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
      };

      buildAuthenticationToken(ctx, payload);

      return {
        message: 'ok',
      };
    },
  },
};

export default resolvers;
