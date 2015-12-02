/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/react/react-global.d.ts" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

interface IAppProps {

}

interface IAppState {

}

class MyApp extends React.Component<IAppProps, IAppState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<h1>Hello World</h1>);
    }

}

$(() => {
    var $mountNode = $('#appMountNode');     
    ReactDOM.render(<MyApp />, $mountNode[0]);
});