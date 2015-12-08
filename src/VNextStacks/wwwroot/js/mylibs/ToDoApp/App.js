/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="todoitem.tsx" />
/// <reference path="../../typings/react/react-dom.d.ts" />
/// <reference path="todomodel.tsx" />
System.register(["./TodoModel", "./TodoItem"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var TodoModel_1, TodoItem_1;
    var routes, TodoApp, model, render;
    return {
        setters:[
            function (TodoModel_1_1) {
                TodoModel_1 = TodoModel_1_1;
            },
            function (TodoItem_1_1) {
                TodoItem_1 = TodoItem_1_1;
            }],
        execute: function() {
            routes = {
                ALL_TODOS: 'all',
                ACTIVE_TODOS: 'active',
                COMPLETED_TODOS: 'completed'
            };
            TodoApp = (function (_super) {
                __extends(TodoApp, _super);
                function TodoApp(props) {
                    var _this = this;
                    _super.call(this, props);
                    this.ESCAPE_KEY = 27;
                    this.ENTER_KEY = 13;
                    this.handleNewTodoKeyDown = function (event) {
                        if (event.which !== _this.ENTER_KEY) {
                            return;
                        }
                        var val = _this.newField.value.trim();
                        if (val) {
                            _this.props.model.addTodo(val);
                            _this.newField.value = '';
                        }
                        return false;
                    };
                    this.toggleAll = function (event) {
                        var checked = event.target.checked;
                        _this.props.model.toggleAll(checked);
                    };
                    this.toggle = function (todoToToggle) {
                        _this.props.model.toggle(todoToToggle);
                    };
                    this.destroy = function (todo) {
                        _this.props.model.destroy(todo);
                    };
                    this.edit = function (todo, callback) {
                        _this.setState({ editing: todo.id }, function () {
                            callback();
                        });
                    };
                    this.save = function (todoToSave, text) {
                        _this.props.model.save(todoToSave, text);
                        _this.setState({ editing: null });
                    };
                    this.cancel = function () {
                        _this.setState({ editing: null });
                    };
                    this.state = {
                        nowShowing: routes.ALL_TODOS,
                        editing: null
                    };
                }
                Object.defineProperty(TodoApp.prototype, "newField", {
                    get: function () {
                        return this.refs && ReactDOM.findDOMNode(this.refs.newField);
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoApp.prototype.componentDidMount = function () {
                    var setState = this.setState;
                    // TODO: look into routing        
                };
                TodoApp.prototype.render = function () {
                    var _this = this;
                    var todos = this.props.model.todos;
                    var shownTodos = todos.filter(function (todo) {
                        return true;
                    });
                    var todoItems = shownTodos.map(function (todo) {
                        return (React.createElement(TodoItem_1.default, {"key": todo.id, "todo": todo, "onCancel": _this.cancel, "onDestroy": function () { return _this.destroy(todo); }, "onEdit": function (callback) { return _this.edit(todo, callback); }, "onSave": function (text) { return _this.save(todo, text); }, "onToggle": function () { return _this.toggle(todo); }}));
                    });
                    return (React.createElement("div", null, React.createElement("div", null, React.createElement("input", {"ref": "newField", "onKeyDown": this.handleNewTodoKeyDown, "placeholder": "What needs to be done?"})), React.createElement("div", null, todoItems)));
                };
                return TodoApp;
            })(React.Component);
            model = new TodoModel_1.default('react-todos');
            //model.clearAll();
            render = function () {
                ReactDOM.render(React.createElement(TodoApp, {"model": model}), document.getElementById('todoApp'));
            };
            model.subscribe(render);
            render();
        }
    }
});
