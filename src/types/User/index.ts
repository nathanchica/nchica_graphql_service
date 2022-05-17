type UserParent = {
    name?: string;
};

export const createUser = (userParent: UserParent) => {
    return {
        __typename: 'User',
        ...userParent
    };
};

export default {
    User: {
        name: ({ name }: any) => name
    }
};
