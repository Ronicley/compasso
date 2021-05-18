import { ApiProperty } from '@nestjs/swagger';
import { City } from 'src/city/city.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    sex: string;

    @ApiProperty()
    @Column()
    birthdate: Date;

    @ApiProperty()
    @Column()
    age: Number;

    @ApiProperty()
    @OneToOne(() => City, {
        eager: true,
        cascade: true
    })
    @JoinColumn()
    city: City;
}