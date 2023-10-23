import { Column,JoinColumn, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RoleEntity } from "./role.entity";

@Entity('users',{schema:'ventas'})

export class UserEntity
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

@OneToOne(() => RoleEntity, role => role.user)
@JoinColumn()
role: RoleEntity;

@Column('varchar',{
    name: 'name',
    nullable: false,
    comment: 'user name',
})
name:string;

@Column('varchar',{
    name: 'lastname',
    nullable: false,
    comment: 'user lastname',
})
lastname:string;

@Column('varchar',{
    name: 'identification',
    nullable: false,
    comment: 'number ci',
})
identification:string;

@Column('varchar',{
    name: 'password',
    nullable: true,
    comment: 'user password',
})
password: string;





}