import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type Query {
    hello: String!
    getUser(email: String!): User
  }
  type Mutation {
    addUser(email: String!, password: String!, name: String!): User
  }
`
