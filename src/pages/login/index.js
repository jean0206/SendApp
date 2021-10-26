import React from "react";
import LoginImage from "../../assets/images/Group 4.png";
import GoogleIcon from "../../assets/images/logoG.png";
import { firebase, googleAuthProvider} from "../../Firebase/firebase";
import 'firebase/auth'
import "./index.css";

const Login = () => {
  const signIn = () => {
      console.log(firebase)
      firebase.auth().signInWithPopup(googleAuthProvider).then((re=>{
      })).catch(err => {
          console.log(err)
      }) 
  };

  return (
    <div className="login-page">
      <div className="login-container-image">
        <img src={LoginImage} />
      </div>
      <div className="login-container-form">
        <div className="login-container-form-square">
          <a>Bienvenido a</a> <br></br>
          <a id="title-bold">SendApp</a>
          <div className="button-container">
            <div className="login-button" onClick={signIn}>
              {" "}
              <img src={GoogleIcon} />
              Iniciar sesión con Google
            </div>
           
          </div>
          <hr id="separator-login"></hr>
          <div className="description-container">
            Programación web avanzada 2021-2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
