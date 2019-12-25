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
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAllTasks() {
        return await this.taskRepository.findAll();
    }
    async getTaskById(id) {
        const found = await this.taskRepository.findOne({ where: { id: id } });
        if (!found) {
            throw new common_1.NotFoundException(`Task with "${id}" not found`);
        }
        return found;
    }
    async createTask(createTaskDto) {
        if (createTaskDto) {
            const response = await this.taskRepository.create({
                id: createTaskDto.id,
                title: createTaskDto.title,
                description: createTaskDto.description,
            });
            return response;
        }
        else {
            throw new common_1.BadRequestException(`Bad Data`);
        }
    }
    async updateTaskStatus(id, status) {
        console.log('hitting');
        const response = await this.taskRepository.update({ title: status }, { returning: true, where: { id: id } });
        return response;
    }
    async deleteTask(id) {
        console.log(id, 'id');
        const response = await this.taskRepository.destroy({
            where: {
                id: id
            }
        });
        console.log(response, 'response');
        return response;
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('TASK_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map