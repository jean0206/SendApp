import React from 'react'
import './index.css'

function NavBar({imageProfile, logout, name}) {
    return (
        <nav className="navbar">
                <img src={imageProfile}/>
            <div onClick={logout} className="navbar-button">
                Cerrar sesión
            </div>
        </nav>
    )
}

export default NavBar
