import React, { Component } from 'react';

class ClassComponent extends Component{
    render(){
        return (
            <h3>Learning {this.props.topic}</h3>
            // <div>
            //     <h1>This is a Class Component</h1>
            //     <h3>This is Line 2</h3>
            // </div>
            // React.createElement('div',null,React.createElement('h1',null,'This is a Class Component'),React.createElement('h3',null,'This is Line 2'))           
        )
    }
}

export default ClassComponent;