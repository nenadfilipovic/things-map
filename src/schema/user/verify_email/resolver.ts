import { raw } from 'objection';
import { User } from 'src/database/models/User';
import { Resolvers, VerifyEmailResult } from 'src/generated/resolverTypes';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Verify users email address.
     */

    verifyEmail: async (_, { input }): Promise<VerifyEmailResult> => {
      /**
       * Prepare data.
       */

      const { verifyEmailToken } = input;

      const user = await User.query().findOne({
        verifyEmailToken,
        isVerified: false,
      });

      if (user) {
        /**
         * Prepare data.
         */

        const { verifyEmailTokenExpires, id } = user;

        if (verifyEmailTokenExpires > new Date()) {
          /**
           * Update user data.
           */

          await User.query()
            .patch({
              isVerified: true,
              emailVerifiedDate: new Date(),
              verifyEmailToken: raw('NULL'),
              verifyEmailTokenExpires: raw('NULL'),
            })
            .findById(id);

          return {
            message:
              'You have successfully verified your email address, please sign in',
          };
        }
      }

      return {
        message:
          'Invalid or expired email verification token or already verified account',
      };
    },
  },
};

export default resolvers;
