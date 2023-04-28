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
exports.TodolistController = void 0;
const common_1 = require("@nestjs/common");
const class_module_dto_1 = require("./dto/class-module.dto");
const todolist_service_1 = require("./todolist.service");
let TodolistController = class TodolistController {
    constructor(Tasks) {
        this.Tasks = Tasks;
    }
    showlist() {
        return this.Tasks.showalltask();
    }
    createtask(body) {
        this.Tasks.create(body);
        return "Created";
    }
    async showtask(id) {
        const task = await this.Tasks.showtask(id);
        if (task) {
            return task;
        }
        throw new common_1.NotFoundException('task not found!');
    }
    async delete(id) {
        const taskdlt = await this.Tasks.Deletetask(id);
        if (taskdlt) {
            return taskdlt;
        }
        throw new common_1.NotFoundException('task not found for delete!');
    }
};
__decorate([
    (0, common_1.Get)("/lists"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodolistController.prototype, "showlist", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [class_module_dto_1.validation]),
    __metadata("design:returntype", String)
], TodolistController.prototype, "createtask", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodolistController.prototype, "showtask", null);
__decorate([
    (0, common_1.Post)("Delete/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodolistController.prototype, "delete", null);
TodolistController = __decorate([
    (0, common_1.Controller)('todolist'),
    __metadata("design:paramtypes", [todolist_service_1.todoservice])
], TodolistController);
exports.TodolistController = TodolistController;
//# sourceMappingURL=todolist.controller.js.map