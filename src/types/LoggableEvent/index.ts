const loggableEvents = [
    {
        name: 'shower groucho',
        logRecords: [],
        active: true
    },
    {
        name: 'shower chica',
        logRecords: [],
        active: true
    }
];

export default {
    Query: {
        loggableEvents: () => loggableEvents
    }
};
