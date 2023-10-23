import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { SchoolEntity } from "./school.entity";

/**MANY TO ONE */

@Entity('students',{schema:'school'})

export class StudentEntity
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

@ManyToOne(() => SchoolEntity, school => school.student )
school:SchoolEntity[];


@Column('varchar',{
    name: 'name',
    nullable: false,
    comment: 'student name',
})
name:string;

@Column('number',{
    name: 'lastname',
    nullable: false,
    comment: 'student lastname',
})
lastname: number;

@Column('date',{
    name: 'dateofadmission',
    nullable: true,
    comment: 'student dateofadmission',
})
dateofadmission: Date;





}