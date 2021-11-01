import React, { useState } from "react";
import chatMessage from "../ChatMessage/ChatMessage";
import "./ChatRoom.css";

const ChatRoom = ({ chat, sendAction}) => {

  const [message,setMessage] = useState("")

  const listMessages = () => {
    return chat.responses.map((c) => (
      <div className="chat-container-message">
          <div className="chat-container-img"><img src={c.img}></img></div>
          {c.message} </div>
    ));
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setMessage(value);
    console.log(value)
  }

  const sendInfo = () => {
        sendAction(message,chat)
  }

  return (
    <div className="chat-container">
    <div>
      {chat.responses && chat.responses.length > 0 ? listMessages() : "No hay mensajes actualmente"}
    </div>
      <div className="input-container">
        <input
          type="text"
          className="input-message"
          placeholder="Respondeer"
          onChange={handleChange}
        ></input>
        <button onClick={sendInfo}>Enviar</button>
      </div>
    </div>
  );
};
export default ChatRoom;
