import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Client } from '../client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>
  ) { }

  
  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async update(client: Client): Promise<UpdateResult> {
    return await this.clientRepository.update(client.id, client);    
  }

  async delete(id): Promise<DeleteResult> {
    return await this.clientRepository.delete(id);
  }

  async create(client: Client): Promise<Client>{
    return this.clientRepository.save(client);    
  }

}
