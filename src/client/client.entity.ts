import { City } from 'src/city/city.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    sex: string;
  
    @Column()
    birthdate: Date;

    @Column()
    age: Number;


    @ManyToOne(() => City)
    @JoinColumn()
    city: City;
}