import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { PaintEntity } from "./paint.entity";

/*MANY TO MANY*/

@Entity('artists',{schema:'galery art'})

export class ArtistEntity
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

@ManyToMany(() => PaintEntity, paint => paint.artist)
@JoinTable()
paint: PaintEntity[];

@Column('varchar',{
    name: 'name',
    nullable: false,
    comment: 'artist name',
})
name:string;

@Column('varchar',{
    name: 'lastname',
    nullable: true,
    comment: 'artist author',
})
lastname: string;

@Column('varchar',{
    name: 'nationality',
    nullable: true,
    comment: 'artist nationality',
})
nationality: string;





}