import { Body, Controller, Post } from "@nestjs/common";
import { shortUrlService } from './shortUrl.service'
import { CreateShortUrlDto } from "src/dto/create-shortUrl.dto";

@Controller()
export class ShortUrlController {
    constructor(private readonly  shortUrlService: shortUrlService) {}

    @Post()
    async createShortUrl(@Body() input: CreateShortUrlDto) {
        return this.shortUrlService.crateShortUrl(input);
    }
}