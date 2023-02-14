import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string

  @Column()
  description: string
}
