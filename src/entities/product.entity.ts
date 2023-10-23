import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products',{schema:'ventas'})

export class ProductEntity
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

@ManyToOne(() => CategoryEntity, category => category.products )
category:CategoryEntity[];


@Column('varchar',{
    name: 'title',
    nullable: false,
    comment: 'product name',
})
title:string;

@Column('number',{
    name: 'price',
    nullable: false,
    comment: 'product price',
})
price: number;

@Column('varchar',{
    name: 'descripcion',
    nullable: true,
    comment: 'product descripcion',
})
description: string;





}