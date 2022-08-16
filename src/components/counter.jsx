import React, { Component } from 'react';


class Counter extends Component {

state = {
    count: 0,
};

    render() { 

        return (
            <React.Fragment> 
                <span>{this.formatCount}</span>
                <button>Increment</button>
            </React.Fragment>
        ); 
    }

    formatCount()
    {
        const {count} =this.state
        return count===0? 'Zero' : count;
    }
}
 //npm i -g create-react-app@1.5.2
 //prefix --location=global
 //npm i bootstrap@4.1.1
export default Counter;