/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
/// <reference path="itodo.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
System.register([], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ESCAPE_KEY, ENTER_KEY, TodoItem;
    return {
        setters:[],
        execute: function() {
            ESCAPE_KEY = 27;
            ENTER_KEY = 13;
            TodoItem = (function (_super) {
                __extends(TodoItem, _super);
                function TodoItem(props) {
                    var _this = this;
                    _super.call(this, props);
                    this.handleSubmit = function (event) {
                        event.preventDefault();
                        var val = _this.state.editText.trim();
                        if (val) {
                            _this.props.onSave(val);
                            _this.setState({ editText: val });
                        }
                        else {
                            _this.props.onDestroy();
                        }
                        return false;
                    };
                    this.handleEdit = function () {
                        _this.props.onEdit(function () {
                            _this.editField.focus();
                            _this.editField.setSelectionRange(_this.editField.value.length, _this.editField.value.length);
                        });
                        _this.setState({ editText: _this.props.todo.title });
                    };
                    this.handleKeyDown = function (event) {
                        if (event.which === ESCAPE_KEY) {
                            _this.setState({ editText: _this.props.todo.title });
                            _this.props.onCancel();
                        }
                        else if (event.which === ENTER_KEY) {
                            _this.handleSubmit(event);
                        }
                    };
                    this.handleChange = function (event) {
                        _this.setState({ editText: _this.editField.value });
                    };
                    this.shouldComponentUpdate = function (nextProps, nextState) {
                        return (nextProps.todo !== _this.props.todo ||
                            nextProps.editing !== _this.props.editing ||
                            nextState.editText !== _this.state.editText);
                    };
                    this.state = {
                        editText: this.props.todo.title
                    };
                }
                Object.defineProperty(TodoItem.prototype, "editField", {
                    get: function () {
                        //return this.refs && (this.refs['editField'] as any).getDOMNode();
                        return this.refs && ReactDOM.findDOMNode(this.refs.editField);
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoItem.prototype.render = function () {
                    return (React.createElement("div", {"className": "item"}, React.createElement("input", {"ref": "editField", "className": "edit", "value": this.state.editText, "onBlur": this.handleSubmit, "onChange": this.handleChange, "onKeyDown": this.handleKeyDown}), React.createElement("button", {"className": "destroy", "onClick": this.props.onDestroy}, "Delete")));
                };
                return TodoItem;
            })(React.Component);
            exports_1("default", TodoItem);
        }
    }
});
