import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose';


export type ShortUrlDocument = HydratedDocument<ShortUrl>
@Schema()
export class ShortUrl {
  @Prop()
  url: string;

  @Prop()
  code: string;

  @Prop()
  urlOriginal: string;

  @Prop()
  numCall: string;
}

export const ShortUrlSchema = SchemaFactory.createForClass(ShortUrl)