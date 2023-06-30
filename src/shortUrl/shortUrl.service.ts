import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import {  ShortUrl, ShortUrlDocument } from "src/schema/url.shema";
import { CreateShortUrlDto } from "./dto/create-shortUrl.dto";

@Injectable()
export class ShortUrlService {
    constructor(
        @InjectModel(ShortUrl.name)
        private shortUrlModel: Model<ShortUrlDocument>,
      ) {}

    async crateShortUrl(url: CreateShortUrlDto){

        function generateCodeUrl() {
            let text = '';
            const stringUrl = "ABCDEFGHIJKLMNOPQRSRUVWXYZabcdefghijklmnopqrstuvwxy0123456789";
            for (let i = 0; i < 5; i++) {
              text += stringUrl.charAt(Math.floor(Math.random() * stringUrl.length));
            }
        
            return text;
          }
        
          const generatedCode = generateCodeUrl();
          const shortUrl = new this.shortUrlModel({
            url: url,
            code: generatedCode,
          
          });
        
          const savedShortUrl: ShortUrlDocument = await shortUrl.save();
        
          return { url: `http://localhost:3000/${savedShortUrl.code}` };

        // const createShortUrl = new ShortUrl()
        // const res = await new this.shortUrlModel(url).save();
        // return { url: `http://localhost:3000/${res+generateCodeUrl()}`}
      
    }

    async getShortUrl(code: string){
      const clicks = await this.shortUrlModel.findOne({code: code})
      return clicks.url;

    }
  }