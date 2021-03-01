import { ResolverContext } from '../context';
import { Resolvers } from '../generated/graphql';

export const resolvers: Resolvers<ResolverContext> = {
  Query: {
    async getUser(_, args, { database }) {
      const { userRepository } = database;
      const { email } = args;
      const user = await userRepository.findOne({ where: { email } });
      return user || null;
    },
  },
  Mutation: {
    async addUser(_, args, { database }) {
      const { userRepository } = database;
      const { email, password, name } = args;
      const user = await userRepository.save({ email, password, name });
      console.log('user added');
      return user;
    },
    async login(_, args, { database }) {
      const { userRepository } = database;
      const { email, password } = args;
      const user = await userRepository.findOne({ email, password });
      console.log('login success');
      return { ok: user !== undefined };
    },
  },
};
