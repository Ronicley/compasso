import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { City } from '../city.entity';
import { CityService } from './city.service';
import { Response } from 'express'

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) { }

  @Get('/uf/:uf')
  async getByUf(@Param('uf') uf, @Res() res: Response): Promise<any> {
    try {
      res.status(HttpStatus.OK).send(
        {
          data: await this.cityService.findByUf(uf),
          message: "success"
        }
      )
    } catch (e) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Get(':name')
  async index(@Param('name') name, @Res() res: Response): Promise<any> {
    try {
      res.status(HttpStatus.OK).send({
        data: await this.cityService.findByName(name),
        message: "success"
      })
    } catch (e) {
      res.status(HttpStatus.NOT_FOUND).send({
        error: e
      })
    }
    
  }

  @Post('create')
  async create(@Body() cityData: City, @Res() res: Response): Promise<any> {
    try {
      res.status(HttpStatus.OK).send({
        data: await this.cityService.create(cityData),
        message: "success"
      })

    } catch (e) {
      res.status(HttpStatus.NOT_FOUND).send({
        error: e
      })
    }
  }

}
