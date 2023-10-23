import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ClientEntity } from "./client.entity";

/*ONE TO ONE*/ 

@Entity('directions',{schema:'info'})

export class DirectionEntity
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

@OneToOne(() => ClientEntity, client => client.direction)
client: ClientEntity;

@Column('varchar',{
    name: 'street',
    nullable: false,
    comment: 'street name',
})
street:string;

@Column('varchar',{
    name: 'contry',
    nullable: true,
    comment: 'country name',
})
contry: string;
    
   
    





}