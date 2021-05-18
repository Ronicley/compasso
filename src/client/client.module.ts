import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientService } from './client/client.service';
import { ClientController } from './client/client.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Client])],
  providers: [ClientService],
  controllers:[ClientController]

})
export class ClientModule {}
