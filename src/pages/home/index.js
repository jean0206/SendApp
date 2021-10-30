import React,{useState,useEffect} from 'react'
import {firebase} from '../../Firebase/firebase'
import NavBar from '../../components/navbar'
import ChatRoom from '../../components/chatRoom/ChatRoom'
import Rooms from '../../components/Rooms/Rooms'
import "./index.css";

function Home() {
    
    const [user,setUser] = useState({})

    useEffect(()=>{
        const initializeUser = () => {
            if(firebase.auth().currentUser!==null){
                setUser({...firebase.auth().currentUser.multiFactor['user']})
                console.log(firebase.auth().currentUser.multiFactor['user'])
            }
        }
        initializeUser()
    },[])

    const signOut = () => {
       firebase.auth().signOut();
       console.log(firebase.auth().currentUser)
    }
    
    return (
        <div>
            <div onClick={signOut}>
                <NavBar imageProfile={user.photoURL} logout={signOut} name={user.displayName}/>        
            </div>
            <div id="contener">
                <Rooms></Rooms>
                <ChatRoom></ChatRoom>
            </div>
        </div>
        
        
    )
}

export default Home
