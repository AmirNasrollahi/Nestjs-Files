interface createtask {
    title: string;
    body: string;
    idtask?: number;
}
export declare class Todorepository {
    showalltask(): Promise<any>;
    showtask(id: number): Promise<any>;
    create(Task: createtask): Promise<void>;
    Delete(id: number): Promise<string>;
}
export {};
