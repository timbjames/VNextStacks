/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FormApp = (function (_super) {
    __extends(FormApp, _super);
    function FormApp(props) {
        _super.call(this, props);
    }
    FormApp.prototype.componentDidMount = function () {
    };
    FormApp.prototype.render = function () {
        return (React.createElement("h1", null, "hello world"));
    };
    return FormApp;
})(React.Component);
ReactDOM.render(React.createElement(FormApp, null), document.getElementById('formApp'));
//# sourceMappingURL=App.js.map