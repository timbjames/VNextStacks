/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseForm = (function (_super) {
    __extends(BaseForm, _super);
    function BaseForm(props) {
        _super.call(this, props);
        this.state = {
            loaded: false,
            resource: this.props.Resource,
            errors: {}
        };
    }
    return BaseForm;
})(React.Component);
//# sourceMappingURL=BaseForm.js.map