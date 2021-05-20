import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { City } from '../city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private cityService: CityService) { }

  @Get('/uf/:uf')
  async getByUf(@Param('uf') uf): Promise<City[]> {
    console.log(uf)
    return await this.cityService.findByUf(uf)
  }
  
  @Get(':name')
  async index(@Param('name') name): Promise<City[]> {
    console.log(name)
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
