import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city/city.entity';
import { Client } from './client/client.entity';

@Module({
  imports: [CityModule, ClientModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [
        City,
        Client
      ],
      synchronize: true,      
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
