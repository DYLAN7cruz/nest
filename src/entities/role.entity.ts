import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('roles',{schema:'ventas'})

export class RoleEntity
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

@OneToOne(() => UserEntity, user => user.role)
user: UserEntity;

@Column('varchar',{
    name: 'name',
    nullable: false,
    comment: 'role name',
})
title:string;

@Column('varchar',{
    name: 'descripcion',
    nullable: true,
    comment: 'role descripcion',
})
descripcion: string;





}