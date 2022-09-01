import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increament(){
        // this.setState({
        //     count: this.state.count+1
        // },()=> {console.log(this.state.count)})

        this.setState((prevState)=>({
            count: prevState +1
        }))
        
    }


  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={()=>this.increament()}>Increament</button>
      </div>
    )
  }
}

export default Counter
