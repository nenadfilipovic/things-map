import fs from 'fs';
import path from 'path';
import { print } from 'graphql';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/resolvers.ts'));

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);

const printedTypeDefs = print(typeDefs);
fs.writeFileSync('schema.graphql', printedTypeDefs);

export { typeDefs, resolvers };
