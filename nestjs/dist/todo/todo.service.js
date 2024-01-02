"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entity_1 = require("./todo.entity");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
let TodoService = class TodoService {
    constructor(todoRepository, configService) {
        this.todoRepository = todoRepository;
        this.configService = configService;
    }
    getHello() {
        console.log(this.configService.get('DATABASE_HOST'), this.configService.get('DATABASE_DB'));
        return 'Hello World!';
    }
    async findAll() {
        return await this.todoRepository.find();
    }
    async findOneBy(id) {
        return await this.todoRepository.findOne({ where: { id } });
    }
    async add(todo) {
        await this.todoRepository.save(todo);
    }
    async update(id) {
        const item = await this.findOneBy(id);
        if (item) {
            return null;
        }
        await this.todoRepository.update(id, { completed: !item.completed });
    }
    async delete(id) {
        const item = await this.findOneBy(id);
        if (!item) {
            return null;
        }
        await this.todoRepository.delete(id);
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todo_entity_1.Todo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], TodoService);
//# sourceMappingURL=todo.service.js.map