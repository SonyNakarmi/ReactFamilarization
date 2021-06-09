import React from 'react';

// UserGreeting and GuestGreeting funtion components
function UserGreeting(props){
    return 'Welcome back!';
}

function GuestGreeting(props){
    return 'Please sign up!';
}

// Greeting function component
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }else{
        return <GuestGreeting />;
    }
}

// Button function components

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
        Login
        </button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
        Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() { // eventHandler
        this.setState({isLoggedIn:true});
    }

    handleLogoutClick() { // eventHandler
        this.setState({isLoggedIn:false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }else{
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return(
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button} 
            </div>
        );
    }

}

export default LoginControl;