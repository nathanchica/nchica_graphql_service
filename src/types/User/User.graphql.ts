import { gql } from 'apollo-server';

export default gql`
    type User {
        """
        Id of the user
        """
        id: ID!

        """
        Full name of the user
        """
        name: String!
    }
`;
