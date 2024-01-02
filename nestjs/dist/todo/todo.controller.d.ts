import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getHello(): string;
    findAll(): Promise<Todo[]>;
    findOneBy(id: string): Promise<Todo>;
    add(todo: Todo): Promise<void>;
    update(id: string): Promise<void>;
    delete(id: string): Promise<void>;
}
