import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Like, Repository, UpdateResult } from 'typeorm';
import { Client } from '../client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>
  ) { }

  async findById(id): Promise<Client> {
    let clientResult: Client = await this.clientRepository.findOne({ id: id });
    
    if (!clientResult) throw new Error("not inserted");
    
    return clientResult;
  }

  async findByName(name): Promise<Client[]> {    
    let client: Client[] = await this.clientRepository.find({ where: { name: Like(`%${name}%`) } });

    if (client.length === 0) throw new Error("404");

    return client
  }

  async update({ id, name }: Client): Promise<UpdateResult> {    
    if(!id || !name) throw new Error("invalid date");
    
    return await this.clientRepository.update(id, { name: name });
  }

  async delete(id): Promise<DeleteResult> {
    let deleteResult = new DeleteResult()

    if (deleteResult.affected < 1) throw new Error("")

    return await this.clientRepository.delete(id)
  }

  async create(client: Client): Promise<Client> {       

    let clientResult: Client = await this.clientRepository.save(client);
    
    if (!clientResult) throw new Error("not inserted");
    
    return clientResult
  }

}
