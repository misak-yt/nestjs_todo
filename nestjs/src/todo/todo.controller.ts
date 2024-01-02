import { TodoService } from './todo.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async findOneBy(@Param('id') id: string): Promise<Todo> {
    return await this.todoService.findOneBy(id);
  }

  @Post()
  async add(@Body() todo: Todo): Promise<void> {
    await this.todoService.add(todo);
  }

  @Put(':id')
  async update(@Param('id') id: string): Promise<void> {
    await this.todoService.update(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.todoService.delete(id);
  }
}
