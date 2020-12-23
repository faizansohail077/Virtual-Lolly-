const { ApolloServer, gql } = require('apollo-server-lambda')

const faunadb = require('faunadb')
const q = faunadb.query
const shortid = require('shortid')


const typeDefs = gql`
  type Query {
    hello: String
    }
 
    type Lolly {
      recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly (recipientName: String!,message: String!,senderName: String!,flavourTop: String!,flavourMiddle: String!,flavourBottom: String!): Lolly
  }
`


const resolvers = {
  Query: {
    hello: () => ('faizan'),
  },
  Mutation: {
    createLolly: async (_, args) => {
      console.log("args",args);
      const client = new faunadb.Client({ secret: "fnAD9nVMJZACDMkAJ2fps1eS67ofxo7Ygzz8KKAe" })
      const id = shortid.generate()
      args.lollyPath = id
      const result = await client.query(
        q.Create(q.Collection("lollies"), {
          data: args
        })
      )
      console.log('hihihi', result)
      console.log('hihihi', result.data)

      return result.data
    }
  }

},


  server = new ApolloServer({
    typeDefs,
    resolvers,
  })

const handler = server.createHandler()

module.exports = { handler }
