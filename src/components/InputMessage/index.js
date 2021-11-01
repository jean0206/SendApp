import React,{useState} from 'react'
import './index.css'

function InputMessage({sendFunction}) {

    const [messageValue,setMessageValue] = useState("")

    const handleChange = (e) => {
        const {name,value} = e.target
        setMessageValue(value)
    }

    const submitMessage = () => {
        sendFunction(messageValue)
    }

    return (
        <div className="input-message-container">
            <input type="text" onChange={handleChange} name="message" className="" placeholder="Nuevo mensaje"/>
            <button onClick={submitMessage} className="">Añadir mensaje</button>
        </div>
    )
}

export default InputMessage
