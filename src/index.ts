import { ApolloServer } from 'apollo-server';
import schema from './schema';
import connectDb from './config/database';
import models from './models';

connectDb();

export const server = new ApolloServer({
    schema,
    context: { models }
});

const port = process.env.PORT || 4000;

server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
