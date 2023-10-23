import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BookEntity } from "./book.entity";

@Entity('authors',{schema:'ventas'})

export class AuthorEntity
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

@ManyToMany(() => BookEntity, book => book.authors)
@JoinTable()
books: BookEntity[];

@Column('varchar',{
    name: 'name',
    nullable: false,
    comment: 'author name',
})
name:string;

@Column('varchar',{
    name: 'lastname',
    nullable: true,
    comment: 'lastname author',
})
lastname: string;





}