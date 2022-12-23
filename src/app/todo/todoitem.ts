export class TodoItem{
    description: string;
    action: boolean;

    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }
}
//export interface TodoItem{
//    description: string;
//    action: string;
//}
