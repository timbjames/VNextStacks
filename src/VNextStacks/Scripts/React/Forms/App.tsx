/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

class FormApp extends React.Component<FormApp.Props, FormApp.State>{

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (<h1>hello world</h1>);
    }

}

module FormApp {
    export interface Props {

    }
    export interface State {

    }
}

ReactDOM.render(<FormApp />, document.getElementById('formApp'));