import React, { useState } from "react";
import "./Rooms.css";
import questionary from "../questionary/questionary";
import Delete from '../../assets/images/delete.png';
import Edit from '../../assets/images/edit.png';
const Rooms = ({ messages, handleChat,id, deleteSelectChat, editSelectedChat, searchAction}) => {
  const selectChat = (chat) => {
    console.log(chat);
    handleChat(chat);
  };

  const [search,setSearch] = useState('')

  const handleChange = (e)=> {
    const {value} = e.target;
    setSearch(value)
    console.log(search)
  }

  const editChat = (chat) =>{
    editSelectedChat(chat);
  }

  const deleteChat = (chat) => {
    deleteSelectChat(chat)
  }

  const searchEvent = () => {
    searchAction(search)
  }

  return (
    <div id="contenedor">
      <div>
        <input onChange={handleChange} placeholder="Buscar" type="text"></input>
        <button onClick={searchEvent}>BUSCAR</button>
      </div>
      <div className="container-chats">
        {messages ? (
          messages.map((quest) => (
            <div
              onClick={() => selectChat(quest)}
              key={quest.id}
              className="question-item"
            >
              <div className="question-item-image">
                <img src={quest.img} />
              </div>
              {quest.message}
              {quest.id===id?(<img onClick={()=>editChat(quest)} src={Edit}/>):''
              }
              {quest.id===id?(<img onClick={()=>deleteChat(quest)} src={Delete}/>):''
              }
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Rooms;
