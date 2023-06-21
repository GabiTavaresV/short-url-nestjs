import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { shortUrlModule } from './shortUrl/shortUrl.module';
import { DbModule } from './database/db.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    shortUrlModule,
    DbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
