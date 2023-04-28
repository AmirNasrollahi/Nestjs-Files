import { Todorepository } from "./todolist-repository";
interface createtask {
    title: string;
    body: string;
    idtask?: number;
}
export declare class todoservice {
    repo: Todorepository;
    constructor(repo: Todorepository);
    create(body: createtask): Promise<void>;
    showtask(id: number): Promise<any>;
    showalltask(): Promise<any>;
    Deletetask(id: number): Promise<string>;
}
export {};
