import React from 'react';

import './Message.css';

function Message ({ message: { user, text }, name }) {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return(
        isSentByCurrentUser
            ? (
                <div className="messageContainer">
                    <p className="sentText" >{trimmedName}</p>
                    <div className="messageBox">
                        <p className="messageText">{text}</p>
                    </div>
                </div>
            )
            : (
                //here
            )
        
    
    )

}

export default Message;