// References to our typings file to get intellisense
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/** MyApp class that is extending the React Component passing in the properties and state */
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    /**
     * Default contructor.
     * @param props
     */
    function MyApp(props) {
        _super.call(this, props);
    }
    /**
     * React Render function
     */
    MyApp.prototype.render = function () {
        return (React.createElement("h1", null, "Hello World"));
    };
    return MyApp;
})(React.Component);
// render the component to our mound node
ReactDOM.render(React.createElement(MyApp, null), document.getElementById('appMountNode'));
//# sourceMappingURL=app.js.map