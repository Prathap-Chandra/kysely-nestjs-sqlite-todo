export interface TodoModelData {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  due_date: Date | null;
}

export class Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  due_date: Date | null;

  constructor(todoData: TodoModelData) {
    this.id = todoData.id;
    this.title = todoData.title;
    this.description = todoData.description;
    this.completed = todoData.completed;
    this.due_date = todoData.due_date;
  }
}
