import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { Database } from '../database/database';

@Injectable()
export class TodoRepository {
  constructor(private readonly database: Database) {}

  async getAll() {
    const databaseResponse = await this.database
      .selectFrom('todo')
      .selectAll()
      .where('id', '=', 1)
      .execute();

    console.log(databaseResponse);
    return databaseResponse.map((todo) => new Todo(todo));
  }

  async findOne(id): Promise<Todo[]> {
    console.log('id: ', id);
    const databaseResponse = await this.database
      .selectFrom('todo')
      .selectAll()
      .where('id', '=', id)
      .execute();

    console.log(databaseResponse);
    return databaseResponse;
  }
}
