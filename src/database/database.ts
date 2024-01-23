import { Kysely } from 'kysely';
import { TodoTable } from '../todo/todoTable';
import { FruitsTable } from '../fruits/fruits.table';

export interface Tables {
  todo: TodoTable;
  fruits: FruitsTable;
}

export class Database extends Kysely<Tables> {}
