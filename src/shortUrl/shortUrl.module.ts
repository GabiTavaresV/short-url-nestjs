import { DbModule } from "src/database/db.module";
import { ShortUrlController } from "./shortUrl.controller";
import { shortUrlService } from "./shortUrl.service";
import { Module } from "@nestjs/common";
import { shortUrlProviders } from "./shortUrl.providers";

@Module({
    imports: [DbModule],
    controllers: [ShortUrlController],
    providers: [
      shortUrlService,
      ...shortUrlProviders,
    ],
  })

  export class shortUrlModule{}