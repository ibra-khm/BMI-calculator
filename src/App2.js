import React from 'react';
import './App.css';
import Counter from './Counter';

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mount: true
        }
        this.mountCounter = () => this.setState({ mount: true })
        this.unmountCounter = () => this.setState({ mount: false })
    }

    render() {
        // console.log('Render')

        return (
            <>
                <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
                <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount</button>
                <div className='counter'>
                    {this.state.mount ? <Counter /> : null}
                </div>
            </>
        )
    }
}