import { Body, Controller, Get, Param, Post, UsePipes } from "@nestjs/common";
import { ShortUrlService } from './shortUrl.service'
import { CreateShortUrlDto } from "./dto/create-shortUrl.dto";
import { ValidationHttp } from "src/pipe/pipe.validation";
import { ShortUrl } from "src/schema/url.shema";

@Controller()
export class ShortUrlController {
    constructor(private readonly  shortUrlService: ShortUrlService) {}

    @Post()
    async createShortUrl(@Body('url', new ValidationHttp()) url : CreateShortUrlDto ) {
        return this.shortUrlService.crateShortUrl(url);
    }

    @Get(':code')
    async getShortUrl(@Param('code') code : string ) {
        return this.shortUrlService.getShortUrl(code)
    }
}