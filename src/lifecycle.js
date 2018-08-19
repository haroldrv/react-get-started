import React from 'react';
import ReactDOM from 'react-dom';

class Wrapper extends React.Component {

    mount() {
        ReactDOM.render(<App />, document.getElementById('node'));
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('node'));
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="node"></div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    componentWillMount(){
        console.log('componentWillMount fired');
        console.log('I can access the this.state here!');
        this.setState({
            counter: this.state.counter +2
        });
        console.log('value of counter', this.state.counter);
    }

    componentDidMount(){
        console.log('componentDidMount fired');
        console.log(ReactDOM.findDOMNode(this));
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    update() {
        console.log('counter value: ', this.state.counter);
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.update.bind(this)}>Add</button>
                <div>{this.state.counter}</div>
            </div>
        )
    }
}

export default Wrapper