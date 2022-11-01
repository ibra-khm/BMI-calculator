import React, { Component } from 'react'

export default class Box extends Component {
  render() {    
    return (
        <>
        <div>
            <h1>{this.props.bmi}</h1>
            {this.props.message}<br />
            {this.props.optimalWeight}<br />
        </div>
        </>
    )
  }
}
