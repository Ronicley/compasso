import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    uf: string;
}