import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { ArtistEntity } from "./artist.entity";

/*MANY TO MANY*/

@Entity('paints',{schema:'galery art'})

export class PaintEntity
{
@PrimaryGeneratedColumn('uuid')
id:string;

@CreateDateColumn({
    name:'create_at',
    type:'timestamp',
    default:() => 'CURRENT_TIMESTAMP',
})
createAt: Date;

@UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default:() => 'CURRENT_TIMESTAMP',
})
updateAt: Date;

@DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
})
deleteAt: Date;

@ManyToMany(() => ArtistEntity, artist => artist.paint)
@JoinTable()
artist: ArtistEntity[];

@Column('varchar',{
    name: 'name',
    nullable: false,
    comment: 'painting name ',
})
name:string;

@Column('number',{
    name: 'price',
    nullable: true,
    comment: 'painting price ',
})
price: number;

@Column('varchar',{
    name: 'description',
    nullable: true,
    comment: 'painting description',
})
description: string;




}