import React, { Component } from "react";
import "./Rooms.css";
import questionary from "../questionary/questionary";

class Rooms extends Component{

    constructor(){
        super();
        this.state = {
            qsts: [
            {id: 0, text:"Questionario 1",description:'Hola!', time:"12:00"},
            {id: 1, text:"Questionario 2",description:'Pregunta!', time:"12:10"}
            ]
        }
    }

    render(){
        const {qsts} = this.state;
        const qustionaryList = qsts.map(quest => {
            return (<li>
                        <questionary>{quest.text} {quest.description} {quest.time}</questionary>
                    </li>
                    
        )});
        return(
            <div id="contenedor">
                <div>
                    <input type="text"></input>
                    <button>BUSCAR</button>
                </div>
                <div>
                    {qustionaryList}
                </div>
            </div>
        )
    }
}

export default Rooms;