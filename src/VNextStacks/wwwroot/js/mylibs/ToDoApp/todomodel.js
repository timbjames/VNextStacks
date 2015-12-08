// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
System.register(["./Utils"], function(exports_1) {
    var Utils_1;
    var TodoModel;
    return {
        setters:[
            function (Utils_1_1) {
                Utils_1 = Utils_1_1;
            }],
        execute: function() {
            TodoModel = (function () {
                function TodoModel(key) {
                    var _this = this;
                    this.key = key;
                    this.onChanges = [];
                    this.subscribe = function (callback) {
                        _this.onChanges.push(callback);
                    };
                    this.inform = function () {
                        Utils_1.Utils.store(_this.key, _this.todos);
                        _this.onChanges.forEach(function (callback) { return callback(); });
                    };
                    this.addTodo = function (title) {
                        _this.todos = _this.todos.concat({
                            id: Utils_1.Utils.uuid(),
                            title: title,
                            completed: false
                        });
                        _this.inform();
                    };
                    this.toggleAll = function (checked) {
                        _this.todos = _this.todos.map(function (todo) {
                            return Utils_1.Utils.extend({}, todo, { completed: checked });
                        });
                        _this.inform();
                    };
                    this.toggle = function (todoToToggle) {
                        _this.todos = _this.todos.map(function (todo) {
                            return todo !== todoToToggle ? todo : Utils_1.Utils.extend({}, todo, { completed: !todo.completed });
                        });
                        _this.inform();
                    };
                    this.destroy = function (todo) {
                        _this.todos = _this.todos.filter(function (candidate) { return candidate !== todo; });
                        _this.inform();
                    };
                    this.save = function (todoToSave, text) {
                        _this.todos = _this.todos.map(function (todo) {
                            return todo !== todoToSave ? todo : Utils_1.Utils.extend({}, todo, { title: text });
                        });
                        _this.inform();
                    };
                    this.clearCompleted = function () {
                        _this.todos = _this.todos.filter(function (todo) { return !todo.completed; });
                        _this.inform();
                    };
                    this.clearAll = function () {
                        _this.todos = [];
                        _this.inform();
                    };
                    this.todos = Utils_1.Utils.store(key);
                }
                return TodoModel;
            })();
            exports_1("default", TodoModel);
        }
    }
});
