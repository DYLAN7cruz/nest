import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('t-shirts',{schema:'ventas'})

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

/*--COLUMNAS DE LA TABLA camisetas--*/ 

@Column('varchar',{
    name: 'size',/*-TALLA-*/
    nullable: false,
    comment: 'shirt size',/*-TALLA DE CAMISETA-*/
})
size:string;


@Column('number',{
    name: 'price',
    nullable: false,
    comment: 't-shirt price', /* PRECIO DE CAMISETA*/
})
price: number;


@Column('varchar',{
    name: 'color',
    nullable: true,
    comment: 't-shirt color', /*---COLOR DE CAMISETA-*/
})
color: string;



@Column('varchar',{
    name: 'description',
    nullable: true,
    comment: 't-shirt description',
})
description: string;





}