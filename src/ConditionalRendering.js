function UserGreeting(props){
    return '<h4>Hey User!</h4>';
}

function GuestGreetig(props){
    return '<h4>Hey Guest!</h4>';
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />
    }else{
        return <GuestGreetig />
    }
}

export default Greeting;