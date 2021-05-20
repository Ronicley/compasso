import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { exception } from 'console';
import { Like, Repository } from 'typeorm';
import { City } from '../city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) { }

  async findByUf(uf): Promise<City[]> {
    let cityResponse: City[] = await this.cityRepository.find({ where: { uf: Like(`%${uf}%`) } });

    if (cityResponse.length == 0) throw new Error("not found");

    return cityResponse
  }

  async findByName(name): Promise<City[]> {
    let city: City[] = await this.cityRepository.find({ where: { name: Like(`%${name}%`) } })
    
    if(city.length == 0) throw new Error("not found");
    
    return city
  }

  async create(city: City): Promise<City> {
    let cityResponse: City = await this.cityRepository.save(city);
    
    return cityResponse
  }

}
