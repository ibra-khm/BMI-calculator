import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        console.log('Constructor')
        super(props)
    
        this.state = {
         counter: 0
        }

        this.increment = () => this.setState({counter: this.state.counter+1})
        this.decrement = () => this.setState({counter: this.state.counter-1})
    }

    componentDidMount() {
        console.log('Component Did Mount')
        console.log('-----------------')
    }


  render() {
    console.log('Render')

    return (
        <>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <div className='counter'>
            Counter: {this.state.counter}        
        </div>
        
        </>
    )
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update')
    console.log(prevState, 'previous Number')
    console.log(snapshot, 'snapshot')
  }

  componentWillUnmount() {
    console.log('Component Will Unmount')

  }
}