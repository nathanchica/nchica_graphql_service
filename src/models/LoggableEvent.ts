import { Schema, model } from 'mongoose';

interface ILoggableEvent {
    name: string;
    active: boolean;
    eventRecords: Array<string>;
}

const loggableEventSchema = new Schema<ILoggableEvent>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    active: Boolean,
    eventRecords: [String]
});

export const LoggableEvent = model('LoggableEvent', loggableEventSchema);
