import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/resolver.ts'));

const typeDefs = mergeTypeDefs(typesArray, { useSchemaDefinition: false });
const resolvers = mergeResolvers(resolversArray);

export { typeDefs, resolvers };
