import next from 'next';
import express from 'express';
import session from 'express-session';
import { ApolloServer } from 'apollo-server-express';

import { ResolverContext } from './context';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { initDatabase } from './database';

const PORT = process.env.PORT || 8080;
const DEV = process.env.NODE_ENV !== 'production';

(async function main() {
  const database = await initDatabase();

  const server = express();

  server.use(
    session({
      secret: 'keyboard cat', // FIXME move to env file?
      resave: false,
      saveUninitialized: false,
      cookie: { secure: !DEV },
    }),
  );

  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    playground: DEV,
    context({ req }): ResolverContext {
      return {
        database,
        session: req.session as any,
      };
    },
  });

  apollo.applyMiddleware({ app: server });

  if (!DEV) {
    // compile and serve frontend
    const app = next({ dev: false });
    const handle = app.getRequestHandler();
    await app.prepare();
    server.all('*', (req, res) => handle(req, res));
  }

  server.listen(PORT, () => console.log(`Ready on http://localhost:${PORT}`));
})();
