import { User } from 'src/database/models/User';
import { SignInUserResult, Resolvers } from 'src/generated/resolverTypes';
import { buildToken } from 'src/authentication/jwt';
import { validatePassword } from 'src/authentication/password';

const resolvers: Resolvers = {
  Mutation: {
    singInUserByEmail: async (
      root,
      args,
      { ctx },
    ): Promise<SignInUserResult> => {
      /**
       * Login user with email.
       * 1. Check if provided email exist.
       * 2. Check if hashed password matches with provided password.
       * 3. Check if user hits rate limit.
       * 4. Create authentication token.
       * 5. Split and send tokens.
       * 6. Return user.
       */
      const { email, password } = args.input;

      const [user] = await User.query().where({ email });

      if (!user) {
        return {
          errors: [
            {
              __typename: 'BadCredentials',
              message: 'Bad email or password, please check your credentials!',
            },
          ],
        };
      }

      const validPassword = await validatePassword(user.password, password);

      if (!validPassword) {
        return {
          errors: [
            {
              __typename: 'BadCredentials',
              message: 'Bad email or password, please check your credentials!',
            },
          ],
        };
      }

      // Implement rate limit here.
      //

      buildToken(ctx, { id: user.id, isAdmin: user.isAdmin });

      return {
        user,
      };
    },

    singInUserByUsername: async (
      root,
      args,
      { ctx },
    ): Promise<SignInUserResult> => {
      /**
       * Login user with username.
       * 1. Check if provided username exist.
       * 2. Check if hashed password matches with provided password.
       * 3. Check if user hits rate limit.
       * 4. Create authentication token.
       * 5. Split and send tokens.
       * 6. Return user.
       */

      const { username, password } = args.input;

      const [user] = await User.query().where({ username });

      if (!user) {
        return {
          errors: [
            {
              __typename: 'BadCredentials',
              message:
                'Bad username or password, please check your credentials!',
            },
          ],
        };
      }

      const validPassword = await validatePassword(user.password, password);

      if (!validPassword) {
        return {
          errors: [
            {
              __typename: 'BadCredentials',
              message:
                'Bad username or password, please check your credentials!',
            },
          ],
        };
      }

      // Implement rate limit here.
      //

      buildToken(ctx, { id: user.id, isAdmin: user.isAdmin });

      return {
        user,
      };
    },
  },
};

export default resolvers;
