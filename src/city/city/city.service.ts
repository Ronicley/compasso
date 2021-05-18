import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { City } from '../city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) { }

  
  async findAll(): Promise<City[]> {
    return await this.cityRepository.find();
  }

  async update(city: City): Promise<UpdateResult> {
    return await this.cityRepository.update(city.id, city);    
  }

  async delete(id): Promise<DeleteResult> {
    return await this.cityRepository.delete(id);
  }

  async create(city: City): Promise<City>{
    return this.cityRepository.save(city);    
  }

}
