import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './types';
import Root from './types/root/root.graphql';
import LoggableEvent from './types/LoggableEvent/LoggableEvent.graphql';
import User from './types/User/User.graphql';

export default makeExecutableSchema({
    typeDefs: [Root, LoggableEvent, User],
    resolvers
});
