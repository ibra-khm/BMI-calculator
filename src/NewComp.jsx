import React from 'react'

 class NewComp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Subscribe to our newsletter",
      //  sub: "Subscribe"
        sub:false
    }
  }
  
Buttonchange=()=>{
  this.setState({
    message: "Thank you for subscribing",
    // sub: "Subscribed"
     sub: !this.state.sub
  })
}

  render() {
    return (
      <div className='App'>
        <h3>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub?"Unsubscribe":"Subscribe"}</button>
      </div>
    );
  }
}
export default NewComp;
