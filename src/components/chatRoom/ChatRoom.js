import React, {Component} from "react";
import chatMessage from "../ChatMessage/ChatMessage";
import "./ChatRoom.css";




class ChatRoom extends Component{
    constructor(){
        super();
        this.state = {
            messages: [
            {id: 0, user:"Camilo",text:'Hola!', time:"12:00"},
            {id: 1, user:"Jean",text:'hola, Cómo vas?', time:"12:02"}
            ]
        }
        
    }
    
      
    updateMessage(e){
        this.setState({message: e.target.value});
    }
     
   

    handleSubmit(e){
        e.preventDefault();
        if(this.state.message!=''){
            const list = this.state.messages;
            const newMessage = {
                id: this.state.messages.length,
                user: "default",
                text: this.state.message,
                time: "12:05"
            }
            list.push(newMessage);
            this.setState({messages: list});
            this.setState({message: ''});
            console.log(newMessage);
        }
    }

    render(){

        const {messages} = this.state;
        const messageList = messages.map(msg => {
            return (<li>
                        <chatMessage>{msg.user}: {msg.text} {msg.time}</chatMessage>
                    </li>
                    
        )});
            
            

        return(
                <div className="class-messages">
                    <div id="id-messages">
                        <ul>
                            {messageList}
                        </ul>
                    </div>
                    <div className="class-send">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input 
                            id="input-msg"
                            type="text"
                            value = {this.state.message}
                            onChange={this.updateMessage.bind(this)}
                            />
                            <button id="btn-send">
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
        )
    }
}
export default ChatRoom;
