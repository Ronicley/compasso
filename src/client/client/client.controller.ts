import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Client } from '../client.entity';
import { ClientService } from './client.service';
import { Response } from 'express';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) { }

  @Get('/id/:id')
  async getById(@Param('id') id, @Res() res: Response): Promise<any> {
    try {
      res.status(HttpStatus.OK).send({
        data: await this.clientService.findById(id),
        message: "success"
      })

    } catch (e) {
      res.status(e == "invalid date" ? HttpStatus.NOT_MODIFIED : HttpStatus.INTERNAL_SERVER_ERROR).json({ message: e })
    }

  }

  @Get(':name')
  async index(@Param('name') name, @Res() res: Response): Promise<any> {
    try {
      res.status(HttpStatus.OK).send({
        data: await this.clientService.findByName(name),
        message: "success"
      })

    } catch (e) {
      res.status(e == "invalid date" ? HttpStatus.NOT_MODIFIED : HttpStatus.INTERNAL_SERVER_ERROR).json({ message: e })
    }
  }

  @Post('create')
  async create(@Body() clientData: Client, @Res() res: Response): Promise<any> {
    try {
      res.status(HttpStatus.OK).send({
        data: await this.clientService.create(clientData),
        message: "success"
      })

    } catch (e) {
      res.status(e == "not inserted" ? HttpStatus.NOT_MODIFIED : HttpStatus.INTERNAL_SERVER_ERROR).json({ message: e })
    }

  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() { name }: Client, @Res() res: Response): Promise<any> {
    let client = new Client();

    client.id = id
    client.name = name
    
    try {
      res.status(HttpStatus.OK).send({
        data: await this.clientService.update(client),
        message: "success"
      })

    } catch (e) {
      res.status(HttpStatus.NOT_MODIFIED).json({ message: "not modified" })
    }
  }

  @Delete(':id/delete')
  async delete(@Param('id') id, @Res() res: Response): Promise<any> {
    try {
      res.status(HttpStatus.OK).send({
        data: await this.clientService.delete(id),
        message: "success"
      })

    } catch (e) {
      res.status(HttpStatus.NOT_MODIFIED).json({ message: e })
    }
  }
}
