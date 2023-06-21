import { Document } from 'mongoose';

export interface ShortUrl extends Document{
    readonly url: string;
}