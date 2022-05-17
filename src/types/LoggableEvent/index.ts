import { ApolloError } from 'apollo-server';

type LoggableEventParent = {
    id?: string;
    name?: string;
    dateTimeRecords?: Array<string>;
    active?: boolean;
};

export const createLoggableEvent = (loggableEventParent: LoggableEventParent) => {
    return {
        __typename: 'LoggableEvent',
        ...loggableEventParent
    };
};

export default {
    Query: {
        loggableEvents: async (parent: any, args: any, { models }: any) => {
            const results = await models.LoggableEvent.find();
            return results.map(({ _id, name, eventRecords, active }: any) => {
                return createLoggableEvent({
                    id: _id,
                    name,
                    dateTimeRecords: eventRecords,
                    active
                });
            });
        }
    },
    Mutation: {
        createLoggableEvent: async (_, { input }: any, { models }: any) => {
            try {
                const newLoggableEvent = await models.LoggableEvent.create({
                    ...input,
                    active: true,
                    eventRecords: []
                });
                return createLoggableEvent({
                    id: newLoggableEvent._id,
                    name: newLoggableEvent.name,
                    dateTimeRecords: newLoggableEvent.eventRecords,
                    active: newLoggableEvent.active
                });
            } catch (err: any) {
                throw new ApolloError(err);
            }
        },
        updateLoggableEvent: async (_, { id, input }: any, { models }: any) => {
            try {
                const loggableEventToUpdate = await models.LoggableEvent.findOne({ _id: id });

                if (!loggableEventToUpdate)
                    throw new ApolloError(`Could not find loggable event with id: '${id}'.`, '400');

                if (input?.name) {
                    loggableEventToUpdate.name = input.name;
                }

                if (input?.active) {
                    loggableEventToUpdate.active = input.active;
                }

                const updatedLoggableEvent = await loggableEventToUpdate.save();
                return createLoggableEvent({
                    id: updatedLoggableEvent._id,
                    name: updatedLoggableEvent.name,
                    dateTimeRecords: updatedLoggableEvent.eventRecords,
                    active: updatedLoggableEvent.active
                });
            } catch (err: any) {
                throw new ApolloError(err);
            }
        },
        deleteLoggableEvent: async (_, { id }: any, { models }: any) => {
            try {
                const deletedLoggableEvent = await models.LoggableEvent.deleteOne({ _id: id });

                if (deletedLoggableEvent.deletedCount) {
                    return { id };
                }
            } catch (err: any) {
                throw new ApolloError(err);
            }

            throw new ApolloError(`Failed to delete loggable event.`);
        },
        createEventRecord: async (_, { loggableEventId, input }: any, { models }: any) => {
            try {
                const loggableEventToUpdate = await models.LoggableEvent.findOne({ _id: loggableEventId });

                if (!loggableEventToUpdate)
                    throw new ApolloError(`Could not find loggable event with id: '${loggableEventId}'.`, '400');

                loggableEventToUpdate.eventRecords = [...loggableEventToUpdate.eventRecords, input.dateTimeISO];

                const updatedLoggableEvent = await loggableEventToUpdate.save();
                return createLoggableEvent({
                    id: updatedLoggableEvent._id,
                    name: updatedLoggableEvent.name,
                    dateTimeRecords: updatedLoggableEvent.eventRecords,
                    active: updatedLoggableEvent.active
                });
            } catch (err: any) {
                throw new ApolloError(err);
            }
        }
    }
};
