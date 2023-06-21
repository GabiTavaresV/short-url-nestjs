import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CreateShortUrlDto } from "src/dto/create-shortUrl.dto";
import { ShortUrl } from "src/interface/shortUrl.interface";

@Injectable()
export class shortUrlService {
    constructor(
        @Inject('SHORT_URL_MODEL')
        private shortUrlModel: Model<ShortUrl>,
      ) {}

    async crateShortUrl(shortUrlDto: CreateShortUrlDto) {
        return this.shortUrlModel.create(shortUrlDto)
       
    }
}