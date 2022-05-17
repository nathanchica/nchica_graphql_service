import { gql } from 'apollo-server';

export default gql`
    type Query {
        appAuthor: User!
    }

    input UpdateAppAuthorInput {
        name: String!
    }

    type Mutation {
        updateAppAuthor(input: UpdateAppAuthorInput!): User!
    }
`;
