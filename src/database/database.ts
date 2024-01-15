import { Kysely } from 'kysely';
import { TodoTable } from '../todo/todoTable';

export interface Tables {
  todo: TodoTable;
}

export class Database extends Kysely<Tables> {}
