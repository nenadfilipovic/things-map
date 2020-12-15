import { GraphQLDateTime } from 'graphql-iso-date';
import { Resolvers } from 'src/generated/resolverTypes';

const resolvers: Resolvers = {
  DateTime: GraphQLDateTime,
};

export default resolvers;
