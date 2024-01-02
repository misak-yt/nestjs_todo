import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    private configService: ConfigService,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOneBy(id: string): Promise<Todo> {
    return await this.todoRepository.findOne({ where: { id } });
  }

  async add(todo: Todo): Promise<void> {
    await this.todoRepository.save(todo);
  }

  async update(id: string): Promise<void> {
    const item = await this.findOneBy(id);
    if (item) {
      return null;
    }
    await this.todoRepository.update(id, { completed: !item.completed });
  }

  async delete(id: string): Promise<void> {
    const item = await this.findOneBy(id);
    if (!item) {
      return null;
    }
    await this.todoRepository.delete(id);
  }
}
