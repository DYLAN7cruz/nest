import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DirectionEntity } from "./direction.entity";

/*ONE TO ONE*/ 

@Entity('clients',{schema:'info'})

export class ClientEntity
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

@OneToOne(() => DirectionEntity, direction => direction.client)
@JoinColumn()
direction: DirectionEntity;

@Column('varchar',{
    name: 'name',
    nullable: false,
    comment: 'client name',
})
title:string;

@Column('varchar',{
    name: 'lastname',
    nullable: false,
    comment: 'client last name ',
})
lastname:string;

@Column('varchar',{
    name: 'email',
    nullable: true,
    comment: 'client',
})
descripcion: string;
    
 
   





}