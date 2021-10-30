import React from "react";
import ChatMessage from './ChatMessage.css';

function chatMessage(user, text, time){
    

    return(
        <div>
            <img/>
            <h5>{user}:</h5>
            <p>{text}</p>
            <h6>{time}</h6>
        </div>
    )
}
export default chatMessage;