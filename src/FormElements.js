import React from 'react';

console.log('Example of named exports and form elements');

// select list example
class FlavorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { value:'orange' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value:e.target.value});
    }

    handleSubmit(e){
        alert("Submitted! "+ this.state.value);
        e.preventDefault();
    }

    render(){
        return(
             <form onSubmit={this.handleSubmit}>
                <label>
                    Pick: 
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="coconut">Coconut</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="orange">Orange</option>
                        <option value="banana">Banana</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
             </form>
        );
    }
}

// Handling multiple inputs
class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 7
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;

        // using "ES6 computed property name" syntax to update the state key corresponding to the given input name
        this.setState({
            [name]:value 
        });
    }

    render(){
         return(
            <div>
                <FlavorForm/>
                <hr/>
             <form>
                <label>
                    Is going:
                    <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                </label>
                <hr/>
                <label>
                    Number of Guests:
                    <input type="text" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
             </form>
            </div>
         );
    }
}

export {FlavorForm,Reservation};

