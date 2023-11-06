import * as mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose'

export class DatabaseConnectionHelper {
    static init(): void {
        const options: ConnectOptions = { 
            dbName: 'bootcamp_db',
            user: 'root',
            pass: 'secret',
            autoCreate: true,
        };
        mongoose.connect('mongodb://localhost:27017', options)
            .then(() => console.log('Connection to mongoDB successful'))
            .catch((e: Error) => console.log(`Could not connect to mongo.\n\n${e}`));
    }
}