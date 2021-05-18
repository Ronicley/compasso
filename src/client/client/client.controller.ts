import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Client } from '../client.entity';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) { }

  @Get()
  index(): Promise<Client[]> {
    return this.clientService.findAll()
  }

  @Post('create')
    async create(@Body() clientData: Client): Promise<any> {
      return await this.clientService.create(clientData);
  }
  
  @Put(':id/update')
    async update(@Param('id') id, @Body() clientData: Client): Promise<any> {
      clientData.id = Number(id);
        console.log('Update #' + clientData.id)
        return this.clientService.update(clientData);
  }
  
  @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.clientService.delete(id);
    } 
}
