import { User } from 'src/database/models/User';
import { validatePassword } from 'src/services/password';
import { buildAuthenticationToken } from 'src/services/authentication';
import { SignInByUsernameResult, Resolvers } from 'src/generated/resolverTypes';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Sign in user by username.
     */

    signInByUsername: async (
      _,
      { input },
      { ctx },
    ): Promise<SignInByUsernameResult> => {
      /**
       * Prepare data.
       */

      const { username, password } = input;

      /**
       * Check if user exist.
       */

      const user = await User.query().findOne({ username });

      if (user) {
        const { id, isAdmin, isVerified, signInCount } = user;

        /**
         * Validate password.
         */

        const validPassword = validatePassword(user.password, password);

        if (!validPassword) {
          return {
            message: 'Bad username or password, please check your credentials',
          };
        }

        /**
         * Create authentication token for user.
         */

        const payload = {
          id,
          isAdmin,
          isVerified,
        };

        await User.query()
          .patch({
            lastSignInDate: new Date(),
            signInCount: signInCount + 1,
            currentSignInIpAddress: ctx.req.connection.remoteAddress,
          })
          .findById(id);

        buildAuthenticationToken(ctx, payload);

        return {
          message: 'Successfully signed in',
        };
      }

      return {
        message: 'Bad username or password, please check your credentials',
      };
    },
  },
};

export default resolvers;
