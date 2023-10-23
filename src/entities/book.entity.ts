import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AuthorEntity } from "./author.entity";


@Entity('books',{schema:'ventas'})

export class BookEntity
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

@ManyToMany(() => AuthorEntity, author=> author.books)
@JoinTable()
authors: AuthorEntity[];



@Column('varchar',{
    name: 'title',
    nullable: false,
    comment: 'book name',
})
title:string;

@Column('varchar',{
    name: 'descripcion',
    nullable: true,
    comment: 'category descripcion',
})
description: string;





}