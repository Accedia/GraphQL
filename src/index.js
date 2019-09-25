import { GraphQLServer } from 'graphql-yoga'
import db from './db'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
    },
    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up!')
})
