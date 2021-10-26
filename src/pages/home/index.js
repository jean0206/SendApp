import React,{useState,useEffect} from 'react'
import {firebase} from '../../Firebase/firebase'
import NavBar from '../../components/navbar'

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
        <div onClick={signOut}>
            <NavBar imageProfile={user.photoURL} logout={signOut} name={user.displayName}/>
        </div>
    )
}

export default Home
