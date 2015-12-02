/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/react/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp(props) {
        _super.call(this, props);
    }
    MyApp.prototype.render = function () {
        return (React.createElement("h1", null, "Hello World"));
    };
    return MyApp;
})(React.Component);
$(function () {
    var $mountNode = $('#appMountNode');
    ReactDOM.render(React.createElement(MyApp, null), $mountNode[0]);
});
//# sourceMappingURL=app.js.map