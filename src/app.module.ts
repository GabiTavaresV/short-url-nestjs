import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortUrlModule } from './shortUrl/shortUrl.module';
import { DbModule } from './database/db.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri:'mongodb+srv://nest:nest@cluster0.iyede5l.mongodb.net/?retryWrites=true&w=majority'
      }),
      inject: [ConfigService]
    }),
    ShortUrlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
