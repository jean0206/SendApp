import React from "react";
import "./questionary.css";

function chatMessage(text, description, time){
    

    return(
        <div id="qustionary1">
            <img/>
            <h5>{text}:</h5>
            <p>{description}</p>
            <h6>{time}</h6>
        </div>
    )
}
export default chatMessage;