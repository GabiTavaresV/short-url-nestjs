import { Connection, Mongoose } from 'mongoose';
import { UrlSchema } from 'src/schema/url.shema';

export const shortUrlProviders = [
  {
    provide: 'SHORT_URL_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('ShortUrl', UrlSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];