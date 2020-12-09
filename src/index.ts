import Knex from 'knex';
import { Model } from 'objection';
import { DefaultContext } from 'koa';
import { ApolloServer, gql } from 'apollo-server-koa';
import { config } from './config';
import { knexConfig } from './config';
import { application } from './application';

Model.knex(Knex(knexConfig));

process.on('unhandledRejection', (reason: string) => {
  throw reason;
});

process.on('uncaughtException', () => {
  process.exit(1);
});

const typeDefs = gql`
  type Query {
    nenad: String!
  }
`;

(() => {
  const server = new ApolloServer({
    typeDefs: [typeDefs],
    resolvers: [],
    introspection: !config.isProd,
    playground: !config.isProd,
    context: (ctx: DefaultContext) => {
      ctx;
    },
  });

  server.applyMiddleware({
    app: application,
    path: config.SERVER_ENDPOINT,
    cors: { credentials: true },
  });

  application.listen(config.SERVER_PORT, () =>
    console.log(
      `👍 Server ready at http://localhost:${config.SERVER_PORT}${server.graphqlPath}`,
    ),
  );
})();
