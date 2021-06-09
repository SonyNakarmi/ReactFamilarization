import React from 'react';
console.log('-- Working with Forms --');
// Example: An input form element whose value is controlled by React to maintain mutable React state (source of truth)
// by using “controlled component”.

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', essayText: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEssayChange = this.handleEssayChange.bind(this);
    }
    handleChange(e) {
        this.setState({ value: e.target.value});
    }

    handleEssayChange(e){
        this.setState({essayText: e.target.value });
    }

    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.value  + ' and Essay Text is: ' + this.state.essayText);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Essay:
                    <input type="text" value={this.state.essayText} onChange={this.handleEssayChange}/>
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export default NameForm;