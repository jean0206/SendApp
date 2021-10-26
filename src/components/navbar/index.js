import React from "react";
import "./index.css";

function NavBar({ imageProfile, logout, name }) {
  return (
    <nav className="navbar">
      <div className="navbar-image">
        {name}
        <img src={imageProfile} />
      </div>
      <div onClick={logout} className="navbar-button">
        Cerrar sesión
      </div>
    </nav>
  );
}

export default NavBar;
