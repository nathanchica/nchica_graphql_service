import { gql } from 'apollo-server';

export default gql`
    type EventRecord {
        """
        ID of this event record
        """
        id: ID!

        """
        Date time this event occurred in ISO string format
        """
        dateTimeISO: String!
    }

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
        Records of this event
        """
        records: [EventRecord!]!

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
`;
