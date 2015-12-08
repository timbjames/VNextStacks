// References to our typings file to get intellisense

/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/** Properties to be used within our MyApp class */
interface IAppProps {
}

/** State to be used within our MyApp class */
interface IAppState {
}

/** MyApp class that is extending the React Component passing in the properties and state */
class MyApp extends React.Component<IAppProps, IAppState> {
    
    /**
     * Default contructor.
     * @param props
     */
    constructor(props: any) {
        super(props);
    }

    /**
     * React Render function
     */
    render() {
        return (<h1>Hello World</h1>);
    }

}

// render the component to our mound node
ReactDOM.render(<MyApp />, document.getElementById('appMountNode'));
