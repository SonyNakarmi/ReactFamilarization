import React from 'react';
function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    const isTrue = false;
    return(
        <div>
            <h1>Hello!</h1>
            <h2>IsTrue: {isTrue ? 'True': 'False'}</h2> {/* Ternary Operator / If-Else with Condition Operator */}
            {unreadMessages.length > 0 &&
                <h2>You have {unreadMessages.length} messages!</h2>                
            }
        </div> 
    );
}

class MailboxRenderer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const messages = ['React','Re: React'];
        return(
            <Mailbox unreadMessages = {messages} />
        );
    }
}

export default MailboxRenderer;