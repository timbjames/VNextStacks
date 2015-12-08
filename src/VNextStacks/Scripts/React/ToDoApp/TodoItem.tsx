/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
/// <reference path="itodo.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import {iTodo} from "./iTodo";

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

export default class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {

    constructor(props) {
        super(props);

        this.state = {
            editText: this.props.todo.title
        };

    }
    
    get editField() {
        //return this.refs && (this.refs['editField'] as any).getDOMNode();
        return this.refs && (ReactDOM.findDOMNode((this.refs as any).editField) as any);
    }

    handleSubmit = (event: any): boolean => {

        event.preventDefault();

        var val = this.state.editText.trim();
        if (val) {
            this.props.onSave(val);
            this.setState({ editText: val });
        } else {
            this.props.onDestroy();
        }

        return false;
        
    }

    handleEdit = (): void => {

        this.props.onEdit(() => {
            this.editField.focus();
            this.editField.setSelectionRange(this.editField.value.length, this.editField.value.length);
        });

        this.setState({ editText: this.props.todo.title });

    }

    handleKeyDown = (event: any): void => {
        if (event.which === ESCAPE_KEY) {
            this.setState({ editText: this.props.todo.title });
            this.props.onCancel();
        }
        else if ( event.which === ENTER_KEY ) {
            this.handleSubmit(event);
        }
    }

    handleChange = (event: any): void => {        
        this.setState({ editText: this.editField.value });
    }
    
    shouldComponentUpdate = (nextProps: TodoItem.Props, nextState: TodoItem.State): any => {
        return ( 
            nextProps.todo !== this.props.todo ||
            nextProps.editing !== this.props.editing ||
            nextState.editText !== this.state.editText
        );
    }

    render() {
        return (
            <div className="item">
                <input ref="editField" className="edit" value={this.state.editText} onBlur={this.handleSubmit} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                <button className="destroy" onClick={ this.props.onDestroy }>Delete</button>
            </div>
        );
    }

}

module TodoItem {
    export interface Props {
        onSave: (val: string) => void;
        onDestroy: () => void;
        onEdit: (callback: () => void) => void;
        onCancel: () => void;
        todo: iTodo;
        onToggle: () => void;
        editing?: boolean;
        key: string;
    }

    export interface State {
        editText: string
    }
}