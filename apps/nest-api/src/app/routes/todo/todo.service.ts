import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository
      .createQueryBuilder()
      .insert()
      .into(Todo)
      .values(createTodoDto)
      .execute();
  }

  async findAll() {
    const response = await this.todoRepository.find();
    return response;
  }

  findOne(id: number) {
    return this.todoRepository.findBy({ id });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const response = await this.todoRepository
      .createQueryBuilder()
      .update()
      .set(updateTodoDto)
      .where('id = :id', { id })
      .execute();
    console.log('response', response);
    return response;
  }

  async remove(id: number) {
    const response = await this.todoRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
    console.log('response', response);
    return response;
  }
}
