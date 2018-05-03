import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../archivitos/soccer master.png'
import user from '../../archivitos/user.png';


export const NavDisplay = ({isLogged, signOut, photoURL}) => {

    return (
        <div className="nav-bar">
            <div className="logo">
                <Link to="/">
                    <img className="logo_fix" src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="pestanas">

                <hr className="divider"/>

                {!isLogged ?
                    <div className="log">
                  </div>:
                    <div className="dropdown" style={{display:"flex", alignItems:"center"}}>
                        <button className="dropbtn"><img className="userphoto" src={photoURL ? photoURL :user} alt=""/></button>
                        <div className="dropdown-content">
                            <Link to="/perfil">Perfil</Link>
                            <Link onClick={signOut} to="/">Cerrar sesión</Link>
                        </div>

                        {/*<button  className="close" >Cerrar sesion</button>*/}

                    </div>}
            </div>
        </div>
    );
};
