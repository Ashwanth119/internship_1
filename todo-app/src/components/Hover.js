import React,{ Component } from 'react';
import Counter from './WithCounter';

class Hover extends Component{
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
        const {count, increment}=this.props;
        return (
            <div>
                <button onMouseOver={increment}>Hovered {count} times</button>
            </div>
        )
    }
}

export default Counter(Hover,10);