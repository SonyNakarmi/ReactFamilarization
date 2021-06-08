import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

// this method runs when the component output has been rendered into the dom element
componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}

// this method runs when we want to clear something on component, when DOM produced by the component is removed
componentWillUnmount(){
    clearInterval(this.timerID);
}

tick(){
    this.setState({
        date: new Date()
    });
}

render(){
    return(
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
}
}
export default Clock;