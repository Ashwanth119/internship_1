import React,{ Component } from "react";

class UserGreet extends Component{
    constructor(){
        super();
        this.state={
            isLogged:true
        }
    }

    render(){

        return this.state.isLogged && <div>Welcome Ashwanth</div>

        // return (
        //     this.state.isLogged ?
        //     <div>Welcome Ashwanth</div> :
        //     <div>Welcome Guest</div>
        // )

        // let message
        // if(this.state.isLogged)
        //     message=<div>Welcome Ashwanth</div>
        // else
        //     message=<div>Welcome Guest</div>

        // return <div>{message}</div>;

        // if(this.state.isLogged)
        //     return <div>Welcome Ashwanth</div>
        // else
        //     return <div>Welcome Guest</div>
    }
}

export default UserGreet;