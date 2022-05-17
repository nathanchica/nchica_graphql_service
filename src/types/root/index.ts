import { createUser } from '../User';

export default {
    Query: {
        appAuthor: () => {
            return createUser({
                name: 'nathan chica'
            });
        }
    },
    Mutation: {
        updateAppAuthor: () => {
            return createUser({
                name: 'nathan chica'
            });
        }
    }
};
