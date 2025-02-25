import React, { Component } from 'react';

class State extends Component{
    constructor(){
        super();
        this.state={
            msg : "WELCOME",
            name : 'xyz'
        }
    }

    clickMe=()=>{
        this.setState({
            msg : 'You clicked me',
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg} {this.state.name}</h1>
                <button onClick={this.clickMe}>Click Me</button>
            </div>
        )
    }
}

export default State;