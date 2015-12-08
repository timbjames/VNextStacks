/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="todoitem.tsx" />
/// <reference path="../../typings/react/react-dom.d.ts" />
/// <reference path="todomodel.tsx" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import { iTodo } from "./iTodo";
import TodoModel from "./TodoModel";
import TodoItem from "./TodoItem";

var routes = {
    ALL_TODOS: 'all',
    ACTIVE_TODOS: 'active',
    COMPLETED_TODOS: 'completed'
}

class TodoApp extends React.Component<TodoApp.Props, TodoApp.State>{

    private ESCAPE_KEY = 27;
    private ENTER_KEY = 13;

    constructor(props) {
        super(props);

        this.state = {
            nowShowing: routes.ALL_TODOS,
            editing: null
        };
    }

    get newField() {
        return this.refs && (ReactDOM.findDOMNode((this.refs as any).newField) as any);
    }

    componentDidMount() {
        var setState = this.setState;
        // TODO: look into routing        
    }

    handleNewTodoKeyDown = (event: React.KeyboardEvent) => {

        if (event.which !== this.ENTER_KEY) {
            return;
        }

        var val = this.newField.value.trim();

        if (val) {
            this.props.model.addTodo(val);
            this.newField.value = '';
        }

        return false;

    }

    toggleAll = (event: React.MouseEvent) => {
        var checked: boolean = (event.target as any).checked;
        this.props.model.toggleAll(checked);
    }

    toggle = (todoToToggle: iTodo): void => {
        this.props.model.toggle(todoToToggle);
    }

    destroy = (todo: iTodo): void => {
        this.props.model.destroy(todo);
    }

    edit = (todo: iTodo, callback: () => void): void => {
        this.setState({ editing: todo.id }, function () {
            callback();
        });
    }

    save = (todoToSave: iTodo, text: string): void => {
        this.props.model.save(todoToSave, text);
        this.setState({ editing: null });
    }

    cancel = (): void => {
        this.setState({ editing: null });
    }

    render() {        

        var todos = this.props.model.todos;

        var shownTodos = todos.filter((todo) => {
            return true;
        });
                
        var todoItems = shownTodos.map((todo) => {            
            return (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onCancel={ this.cancel }
                    onDestroy={ () => this.destroy(todo) }
                    onEdit={ (callback: () => void) => this.edit(todo, callback) }
                    onSave={ (text: string) => this.save(todo, text) }
                    onToggle={ () => this.toggle(todo) } />
            );
        });

        return (
            <div>
                <div><input ref="newField" onKeyDown={ this.handleNewTodoKeyDown } placeholder="What needs to be done?" /></div>
                <div>{ todoItems }</div>
            </div>
        );        
    }

}

module TodoApp {
    export interface Props {
        model: TodoModel
    }
    export interface State {
        editing?: string;
        nowShowing?: string;
    }
}

var model = new TodoModel('react-todos');
//model.clearAll();

var render = function () {
    ReactDOM.render(<TodoApp model={model} />, document.getElementById('todoApp'));
}

model.subscribe(render);
render();
