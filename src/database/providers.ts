import * as mongoose from 'mongoose';
import config from '../config/mongo.config'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(proces.env.MONGO_URI),
  },
];