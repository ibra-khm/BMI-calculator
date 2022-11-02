import React, { Component } from 'react'

export default class Box extends Component {
  
  render() {    
    return (
        <>
        <div className='mt-5 '>
            <p className='text-white text-lg'>{this.props.bmi}</p>
            <p className='text-white text-lg'>{this.props.message}</p>
            <p className='text-white text-lg'>{this.props.optimalWeight}</p>
        </div>
        </>
    )
  }
}
