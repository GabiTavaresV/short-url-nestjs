import * as mongoose from 'mongoose';
import config from '../config/mongo.config'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://nest:nest@cluster0.iyede5l.mongodb.net/?retryWrites=true&w=majority'),
  },
];