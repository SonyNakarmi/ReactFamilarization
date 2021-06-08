// Adding lifecycle methods (componentDidMount, ComponentWillUnmount) to a class
class Clock extends React.Component{
    constructor(props){
        super(props); // In react - class constructor should always call base constructor with props
        this.state = {date:new Date()};
    }

    // set up a timer whenever the clock is rendered in the DOM
    componentDidMount(){

    }

    // clear timer when DOM produced by clock is removed
    componentWillUnmount(){

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