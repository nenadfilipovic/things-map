import { Resolvers } from 'src/generated';
import { GraphQLDateTime } from 'graphql-iso-date';

const resolvers: Resolvers = {
  DateTime: GraphQLDateTime,
};

export default resolvers;
