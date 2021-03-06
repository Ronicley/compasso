import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city.entity';
import { CityController } from './city/city.controller';
import { CityService } from './city/city.service';

@Module({
  imports:[TypeOrmModule.forFeature([City])],
  providers: [CityService],
  controllers:[CityController]
})
export class CityModule {}
