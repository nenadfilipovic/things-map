import { buildToken } from 'src/authentication/jwt';
import { User } from 'src/database/models/User';
import { hashPassword } from 'src/authentication/password';
import { Resolvers, SignUpUserResult } from 'src/generated/resolverTypes';

const resolvers: Resolvers = {
  Mutation: {
    signUpUser: async (
      root,
      args,
      { ctx },
      info,
    ): Promise<SignUpUserResult> => {
      /**
       * Register user.
       * 1. Check if email or username is taken.
       * 2. Create user with provided data.
       * 3. Create authentication token.
       * 4. Split and send tokens.
       * 5. Return user.
       * 6. Send verification email.
       */

      const {
        countryCode,
        email,
        firstName,
        lastName,
        password,
        username,
      } = args.input;

      const emailTaken = await User.query().where({ email });

      if (emailTaken[0]) {
        return {
          errors: [
            {
              __typename: 'EmailTaken',
              path: 'email',
              message: 'Email is already taken!',
            },
          ],
        };
      }

      const usernameTaken = await User.query().where({ username });

      if (usernameTaken[0]) {
        return {
          errors: [
            {
              __typename: 'UserNameTaken',
              path: 'username',
              message: 'Username is already taken!',
            },
          ],
        };
      }

      const user = await User.query().insert({
        countryCode,
        username,
        password: await hashPassword(password),
        firstName,
        lastName,
        email,
      });

      buildToken(ctx, { id: user.id, isAdmin: user.isAdmin });

      return {
        user,
      };
    },
  },
};

export default resolvers;
