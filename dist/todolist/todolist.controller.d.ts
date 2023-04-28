import { validation } from './dto/class-module.dto';
import { todoservice } from './todolist.service';
export declare class TodolistController {
    Tasks: todoservice;
    constructor(Tasks: todoservice);
    showlist(): Promise<any>;
    createtask(body: validation): string;
    showtask(id: number): Promise<any>;
    delete(id: number): Promise<string>;
}
