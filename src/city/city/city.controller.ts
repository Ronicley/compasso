import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
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
      res.status(HttpStatus.NOT_FOUND)
    }
  }

  @Get(':name')
  async index(@Param('name') name): Promise<City[]> {    
    return await this.cityService.findByName(name)
  }

  @Post('create')
  async create(@Body() cityData: City): Promise<any> {
    return await this.cityService.create(cityData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() cityData: City): Promise<any> {
    cityData.id = Number(id);
    console.log('Update #' + cityData.id)
    return this.cityService.update(cityData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.cityService.delete(id);
  }
}
