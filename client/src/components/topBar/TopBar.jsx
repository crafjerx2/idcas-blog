import React, { useContext } from 'react'
import './topBar.css'
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';

const TopBar = () => {
  const { user, dispatch } = useContext(Context)

  const handleLogout = e => {
    e.preventDefault();

    dispatch({ type: "LOGOUT" })
  }
  return ( 
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-youtube"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" >Inicio</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/" >Nosotros</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/" >Contacto</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write" >Escribir</Link>
          </li>
          { user  &&
            <li className="topListItem">
              <Link className="link" onClick={handleLogout} to="/" >Salir</Link>
            </li>
          }
        </ul>
      </div>
      <div className="topRight">
        { user ? (
            <img className="topImage" src={user.image} alt="" />
          ) : 
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login" >Login</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register" >Register</Link>
            </li>
          </ul>
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
   );
}
 
export default TopBar;