// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import { iTodo } from "./iTodo";
import { Utils } from "./Utils";

export default class TodoModel {

    todos: iTodo[];
    onChanges: { (): void }[] = [];

    constructor(private key: string) {        
        this.todos = Utils.store(key);         
    }

    subscribe = (callback: () => void): void => {
        this.onChanges.push(callback);
    }

    inform = (): void => {
        Utils.store(this.key, this.todos);
        this.onChanges.forEach(callback => callback());
    }

    addTodo = (title: string): void => {
        this.todos = this.todos.concat({
            id: Utils.uuid(),
            title: title,
            completed: false
        });

        this.inform();
    }

    toggleAll = (checked: boolean): any => {

        this.todos = this.todos.map(todo => {
            return Utils.extend({}, todo, { completed: checked });
        });

        this.inform();

    }

    toggle = (todoToToggle: iTodo): void => {
        this.todos = this.todos.map(todo => {
            return todo !== todoToToggle ? todo : Utils.extend({}, todo, { completed: !todo.completed });
        });

        this.inform();
    }

    destroy = (todo: iTodo): void => {
        this.todos = this.todos.filter(candidate => candidate !== todo);
        this.inform();
    }

    save = (todoToSave: iTodo, text: string): void => {

        this.todos = this.todos.map(todo =>
            todo !== todoToSave ? todo : Utils.extend({}, todo, { title: text })
        );

        this.inform();

    }

    clearCompleted = (): void => {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.inform();
    }

    clearAll = (): void => {
        this.todos = [];
        this.inform();
    }

}
