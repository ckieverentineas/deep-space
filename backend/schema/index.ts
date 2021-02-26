import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type Query {
    hello: String!
    getUser(id: Int!): User
    addUser(email: String!, password: String!): User
  }
`
