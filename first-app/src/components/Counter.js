import React, { Component } from 'react'

class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1,
        })
    }

    // increment=()=>{
    //     this.setState((pState)=>({
    //         count:pState.count+1
    //     }))
    // }

    decrement=()=>{
        this.setState({
            count:this.state.count-1,
        })
    }

    incrementFive=()=>{
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return(
            <div>
                <p>Counter App</p>
                <p>{this.state.count}</p>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.incrementFive}>Increment</button>
            </div>
        )
    }
}
export default Counter;