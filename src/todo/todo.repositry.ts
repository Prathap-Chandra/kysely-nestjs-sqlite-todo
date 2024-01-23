import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { Database } from '../database/database';
import { sql } from 'kysely';

@Injectable()
export class TodoRepository {
  constructor(private readonly database: Database) {}

  async getAll(): Promise<Todo[]> {
    const databaseResponse = await this.database
      .selectFrom('todo')
      .selectAll()
      .execute();

    console.log(databaseResponse);
    if (databaseResponse.length === 0) {
      return []; // Or throw an appropriate error if needed
    }
    return databaseResponse.map((todo) => new Todo(todo));
  }

  async findOne(id): Promise<Todo> {
    // console.log('id: ', id);
    // const databaseResponse = await this.database
    //   .selectFrom('todo')
    //   .selectAll()
    //   .where('id', '=', id)
    //   .execute();

    // console.log(databaseResponse);
    // return databaseResponse[0];
    // const databaseResponse = await this.database.executeQuery(
    //   'SELECT * FROM todo WHERE id = ?',
    //   [id],
    // );

    const databaseResponse = await sql<Todo[]>`select * from todo`.execute(
      this.database,
    );
    console.log(databaseResponse.rows);
    return databaseResponse[0];
  }
}
