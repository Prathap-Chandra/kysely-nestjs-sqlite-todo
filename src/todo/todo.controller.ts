import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/')
  getAll(): Promise<Todo[]> {
    return this.todoService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): Promise<Todo> {
    // Parse the 'id' parameter to the desired type (e.g., number) if needed
    return this.todoService.getById(id);
  }
}
