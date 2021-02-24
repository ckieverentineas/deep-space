import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type User {
    id: Int!
    age: Int!
    name: String!
  }

  type Query {
    hello: String!
    getUser(id: Int!): User
  }
`
