import { ResolverContext } from '../context'
import { Resolvers } from '../generated/graphql'

export const resolvers: Resolvers<ResolverContext> = {
  Query: {
    hello() {
      return 'hello from graphql server'
    },
    async getUser(_, args, { database }) {
      const { userRepository } = database
      const { id } = args
      const user = await userRepository.findOne({ where: { id } })
      return user || null
    },
  },
}
