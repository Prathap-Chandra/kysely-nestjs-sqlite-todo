import { Generated } from 'kysely';

export interface TodoTable {
  id: Generated<number>;
  title: string;
  description: string;
  completed: boolean;
  due_date: Date | null;
}
