import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll() {
    const todos = [
      {
        title: 'Create a nest API',
        description: 'Create a nest API to pratice a new backend tecnology',
      },
      {
        title: 'Create a next app',
        description:
          'Create a next app to use as a front end application using the nest API',
      },
      {
        title: 'Finish the content',
        description: 'Complete the journey of knowledge',
      },
    ];

    return todos;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
