import next from 'next';
import express from 'express';
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

  const context: ResolverContext = {
    database,
  };

  const apollo = new ApolloServer({ typeDefs, resolvers, context, playground: true });
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
