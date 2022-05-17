import 'dotenv/config';
import { connect, connection } from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL;

const connectDb = () => {
    connect(DATABASE_URL as string, {}, (err) => {
        if (err) {
            console.error('Connection to DB failed');
        } else {
            console.log('Connection to DB success');
        }
    });
};

const database = connection;

database.on('error', console.error.bind(console, 'MongoDB connection error'));

export default connectDb;
