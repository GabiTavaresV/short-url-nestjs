import { DbModule } from "src/database/db.module";
import { ShortUrlController } from "./shortUrl.controller";
import { ShortUrlService } from "./shortUrl.service";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ShortUrl, ShortUrlSchema } from "src/schema/url.shema";

@Module({
    imports: [MongooseModule.forFeature([
      { name: ShortUrl.name, schema: ShortUrlSchema}
    ])],
    controllers: [ShortUrlController],
    providers: [ShortUrlService],
    exports: [ShortUrlService]
  })

  export class ShortUrlModule{}