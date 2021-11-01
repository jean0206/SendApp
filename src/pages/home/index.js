import React, { useState, useEffect } from "react";
import { firebase, db } from "../../Firebase/firebase";
import NavBar from "../../components/navbar";
import ChatRoom from "../../components/chatRoom/ChatRoom";
import InputMessage from "../../components/InputMessage";
import Rooms from "../../components/Rooms/Rooms";
import "./index.css";

function Home() {
  const [user, setUser] = useState({});
  const [allMessages, setMessages] = useState([]);
  const [chatSelected, setChatSelected] = useState({});
  const [temporalMessages,setTemporalMessages] = useState([]);

  useEffect(() => {
    const initializeUser = async () => {
      if (firebase.auth().currentUser !== null) {
        setUser({ ...firebase.auth().currentUser.multiFactor["user"] });
        console.log(firebase.auth().currentUser.multiFactor["user"]);
      }
      const response = await db.collection("messages").get();
      const newMessage = response.docs.map((doc) => {
        const { name, img, message, responses, id } = doc.data();
        const docId = doc.id;
        return { name, img, message, responses, id, docId };
      });
      console.log(newMessage);
      setMessages(newMessage);
      setTemporalMessages(newMessage)
    };
    initializeUser();
  }, []);

  const signOut = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
  };

  const sendMessage = async (message) => {
    console.log(user.uid);
    const response = await db.collection("messages").add({
      id: user.uid,
      name: user.displayName,
      img: user.photoURL,
      message: message,
      responses: [],
    });
    const updateMessage = await db.collection("messages").get();
    console.log(updateMessage);
    const newMessages = updateMessage.docs.map((doc) => {
      const { name, img, message, responses, id } = doc.data();
      const docId = doc.id;
      return { name, img, message, responses, id, docId };
    });
    setMessages(newMessages);
    setTemporalMessages(newMessages)
    console.log(updateMessage);
  };

  const handleChat = (chat) => {
    console.log(chat.id);
    setChatSelected(chat);
  };

  const sendMessageChat = async (message, chat) => {
    chat.responses.push({
      message: message,
      id: user.uid,
      name: user.displayName,
      img: user.photoURL,
    });
    await db.collection("messages").doc(chat.docId).update({
      id: chat.id,
      img: chat.img,
      message: chat.message,
      name: chat.name,
      responses: chat.responses,
    });
    setChatSelected({
      docId: chat.docId,
      id: chat.id,
      img: chat.img,
      message: chat.message,
      name: chat.name,
      responses: chat.responses,
    });
    console.log(chatSelected);
  };

  const deleteChat = async (chat) => {
    console.log(chat);
    if (chat.responses.length > 0) {
      alert("No puedes eliminar este chat, tiene mensajes vinculados ");
    } else {
      await db.collection("messages").doc(chat.docId).delete();
      alert("Se ha eliminado el mensaje");
      const updateMessage = await db.collection("messages").get();
      console.log(updateMessage);
      const newMessages = updateMessage.docs.map((doc) => {
        const { name, img, message, responses, id } = doc.data();
        const docId = doc.id;
        return { name, img, message, responses, id, docId };
      });
      setMessages(newMessages);
      setTemporalMessages(newMessages)
    }
  };

  const editChat = async (chat) => {
    console.log(chat);
    const newMessage = window.prompt("Digite el nuevo mensaje", "");
    if (newMessage === "") {
      alert("El mensaje no debe ser vacio");
    } else {
      try {
        chat.message = newMessage;
        await db.collection("messages").doc(chat.docId).update({
          id: chat.id,
          img: chat.img,
          message: newMessage,
          name: chat.name,
          responses: chat.responses,
        });
        const updateMessage = await db.collection("messages").get();
        console.log(updateMessage);
        const messagesUpdates = updateMessage.docs.map((doc) => {
          const { name, img, message, responses, id } = doc.data();
          const docId = doc.id;
          return { name, img, message, responses, id, docId };
        });
        setMessages(messagesUpdates);
        setTemporalMessages(messagesUpdates)
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const search = (name) => {
    const filterMessages = allMessages.filter(mess => mess.name.includes(name))
    if(filterMessages.length > 0) {
      setTemporalMessages(filterMessages)
    }else{
      setTemporalMessages(allMessages)
    }
  }

  return (
    <div>
      <div onClick={signOut}>
        <NavBar
          imageProfile={user.photoURL}
          logout={signOut}
          name={user.displayName}
        />
      </div>
      <div>
        <InputMessage sendFunction={sendMessage} />
      </div>
      <div id="contener">
        <Rooms
          handleChat={handleChat}
          deleteSelectChat={deleteChat}
          id={user.uid}
          messages={temporalMessages}
          editSelectedChat={editChat}
          searchAction={search}
        />
        <ChatRoom sendAction={sendMessageChat} chat={chatSelected}></ChatRoom>
      </div>
    </div>
  );
}

export default Home;
