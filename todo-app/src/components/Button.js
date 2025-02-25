import React,{ Component } from 'react';
import Counter from './WithCounter';

class Button extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         count:0
    //     }
    // }
    // increment=()=>{
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }

    render(){
        const {count,increment}=this.props;
        return (
            <div>
                <button onClick={increment}>{this.props.name} clicked {count} times</button>
            </div>
        )
    }
}

export default Counter(Button,5);