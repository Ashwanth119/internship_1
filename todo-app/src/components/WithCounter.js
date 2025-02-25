import React,{ Component } from 'react';


const Counter=(WrappedComponent,inc)=>{
    class WithCounter extends Component{
        constructor(){
            super();
            this.state={
                count:0
            }
        }
        increment=()=>{
            this.setState({
                count:this.state.count+inc
            })
        }

        render(){
            return(
                <WrappedComponent count={this.state.count} increment={this.increment} {...this.props}/>
            );
        };
    }

    return WithCounter;
}

export default Counter;