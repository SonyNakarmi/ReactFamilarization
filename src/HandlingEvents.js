import React from 'react';

console.log('-- Handling Events --');

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggle:true};

        // binding required to make this work in callback function
        // In JavaScript, class methods are not bound by default
        // In JavaScript, if we refer to a method without '()' / pointer, we should bind that method
        // Binding in constructor or using class field syntax is better 
        this.handleClick = this.handleClick.bind(this);

        // another way to bind this - is using public class field syntax - not working ??
        // handleClick = () => {
        //     this.setState((prevState) => ({
        //         isToggleOn: !prevState.isToggleOn
        //     }));
        // }
    }

    handleClick(){
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return(
            // another way to bind this without binding within class -  <button onClick={() => this.handleClick()}>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF' }
            </button>
        );
    }
}

export default Toggle;