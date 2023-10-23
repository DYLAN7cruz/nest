import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { StudentEntity } from "./student.entity";

/**ONE TO MANY */

@Entity('schools',{schema:'school'})

export class SchoolEntity
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

@OneToMany(() =>StudentEntity, student => student.school )
student:StudentEntity[];

@Column('varchar',{
    name: 'name',
    nullable: false,
    comment: 'school name',
})
name:string;

@Column('varchar',{
    name: 'location',
    nullable: true,
    comment: ' school location',
})
location: string;





}