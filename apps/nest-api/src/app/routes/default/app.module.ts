import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from '@routes/todo/todo.module';
import { Todo } from '@routes/todo/entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5555,
      logging: true,
      synchronize: true,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      entities: [Todo],
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
