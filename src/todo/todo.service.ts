import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repositry';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  getAll(): Promise<Todo[]> {
    return this.todoRepository.getAll();
  }

  async getById(id: string): Promise<Todo> {
    // Implement logic to fetch a todo by ID from your data source
    // For example, using a repository or another method
    const todo = await this.todoRepository.findOne(id);
    return todo;
  }
}
