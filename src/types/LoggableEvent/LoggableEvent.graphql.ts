import { gql } from 'apollo-server';

export default gql`
    type LoggableEvent {
        """
        ID of this loggable event
        """
        id: ID!

        """
        Name of this loggable event
        """
        name: String!

        """
        DateTime records in ISO string format of this event being logged
        """
        dateTimeRecords: [String!]!

        """
        Whether or not this event is active
        """
        active: Boolean!
    }

    extend type Query {
        """
        Events that maintain its own records of when it was logged
        """
        loggableEvents: [LoggableEvent!]!
    }

    input CreateLoggableEventInput {
        name: String!
    }

    input UpdateLoggableEventInput {
        name: String
        active: Boolean
    }

    type DeleteLoggableEventResponse {
        id: ID!
    }

    input CreateEventRecordInput {
        dateTimeISO: String!
    }

    extend type Mutation {
        createLoggableEvent(input: CreateLoggableEventInput!): LoggableEvent!
        updateLoggableEvent(id: ID!, input: UpdateLoggableEventInput!): LoggableEvent!
        deleteLoggableEvent(id: ID!): DeleteLoggableEventResponse
        createEventRecord(loggableEventId: ID!, input: CreateEventRecordInput!): LoggableEvent!
    }
`;
