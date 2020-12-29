import { Resolvers } from 'src/types';
import { GraphQLDateTime } from 'graphql-iso-date';

const resolvers: Resolvers = {
  DateTime: GraphQLDateTime,
};

export default resolvers;
