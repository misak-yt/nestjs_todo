import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export declare class TodoService {
    private todoRepository;
    private configService;
    constructor(todoRepository: Repository<Todo>, configService: ConfigService);
    findAll(): Promise<Todo[]>;
    findOneBy(id: string): Promise<Todo>;
    add(todo: Todo): Promise<void>;
    update(id: string): Promise<void>;
    delete(id: string): Promise<void>;
}
