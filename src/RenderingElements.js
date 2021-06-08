// Example of creating Class component called "Clock" and defining constructor to assign state

import React from 'react';

// Defining class component rather than a method/function
class Clock extends React.Component{
    constructor(props){
        super(props); // In react - class constructor should always call base constructor with props
        this.state = {date:new Date()};
    }

    render(){
        return(
            <div>
                <h1>Hello Dear!</h1>
                <h2>It is {this.state.date.toLocaleDateString()}</h2>
            </div> 
        );
    }
}

// Defining Tick function component
function Tick(){
    return(
        <div>
            <h1>Hello Dear!</h1>
            <h2>It is {new Date().toLocaleDateString()}</h2>
        </div> 
    );
}

export default Clock;