import {Column,Entity,JoinColumn,OneToOne,PrimaryGeneratedColumn,UpdateDateColumn} from 'typeorm'
import { Post } from './POST'

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    Email:string

    @Column({length:10})
    password:string

    @Column()
    createat:Date

    @UpdateDateColumn()
    updateat:Date

    @OneToOne(() => Post)
    @JoinColumn()
    post:Post
}