import Knex from 'knex';
import Pino from 'pino';
import { Model } from 'objection';
import { DefaultContext } from 'koa';
import { ApolloServer } from 'apollo-server-koa';

import { application } from './application';
import knexConfig from './database/config';

const port = process.env.APP_PORT;
const development = process.env.NODE_ENV == 'development';

const knexConnection = Knex(knexConfig);
Model.knex(knexConnection);

const logger = Pino({ prettyPrint: development });

if (!port) {
  logger.error('Port must be defined!');
  process.exit(1);
}

process.on(
  'uncaughtException',
  Pino.final(logger, (err, finalLogger) => {
    finalLogger.error(err, 'uncaughtException');
    process.exit(1);
  }),
);

process.on(
  'unhandledRejection',
  Pino.final(logger, (err, finalLogger) => {
    finalLogger.error(err, 'unhandledRejection');
    process.exit(1);
  }),
);

(() => {
  const server = new ApolloServer({
    playground: true,
    context: (ctx: DefaultContext) => ctx,
  });

  server.applyMiddleware({ app: application, path: '/graphql', cors: true });

  application.listen({ port }, () =>
    console.log(
      `👍 Server ready at http://localhost:${port}${server.graphqlPath}`,
    ),
  );
})();
