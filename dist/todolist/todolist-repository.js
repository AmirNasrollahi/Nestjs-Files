"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todorepository = void 0;
const promises_1 = require("fs/promises");
const common_1 = require("@nestjs/common");
let Todorepository = class Todorepository {
    async showalltask() {
        const content = await (0, promises_1.readFile)("dtb.json", "utf-8");
        const Tasks = JSON.parse(content);
        return Tasks;
    }
    async showtask(id) {
        const content = await (0, promises_1.readFile)("dtb.json", "utf-8");
        const Tasks = JSON.parse(content);
        const showtask = Tasks.find(task => (task.taskid == id));
        return showtask;
    }
    async create(Task) {
        const content = await (0, promises_1.readFile)("dtb.json", "utf-8");
        const Tasks = JSON.parse(content);
        const id = Math.floor(Math.random() * 999);
        const newtask = {
            taskid: id,
            title: Task.title,
            body: Task.body
        };
        Tasks.push(newtask);
        await (0, promises_1.writeFile)('dtb.json', JSON.stringify(Tasks));
    }
    async Delete(id) {
        const content = await (0, promises_1.readFile)('dtb.json', 'utf-8');
        const Tasks = JSON.parse(content);
        const taskdlt = Tasks.findIndex(task => { task.taskid == id; });
        Tasks.splice(taskdlt, 1);
        await (0, promises_1.writeFile)('dtb.json', JSON.stringify(Tasks));
        return "Task deleted";
    }
};
Todorepository = __decorate([
    (0, common_1.Injectable)()
], Todorepository);
exports.Todorepository = Todorepository;
//# sourceMappingURL=todolist-repository.js.map