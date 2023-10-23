import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cars',{schema:'ventas'})

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

/*--COLUMNAS DE LA TABLA CARROS--*/ 

@Column('varchar',{
    name: 'brand',/*-MARCA-*/
    nullable: false,
    comment: 'car brand',/*-MARCA DE CARRO-*/
})
brand:string;


@Column('number',{
    name: 'price',
    nullable: false,
    comment: 'car price', /* PRECIO DEL CARRO*/
})
price: number;


@Column('varchar',{
    name: 'color',
    nullable: true,
    comment: 'car color', /*---COLOR DE CARRO-*/
})
color: string;


@Column('varchar',{
    name: 'year',
    nullable: true,
    comment: 'car year', /*--AÑO DEL CARRO--*/ 
})
year: string;


@Column('varchar',{
    name: 'description',
    nullable: true,
    comment: 'car description',
})
description: string;





}