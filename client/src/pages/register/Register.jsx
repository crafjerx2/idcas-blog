import api from '../../api/posts.js';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './register.css'
import Notification from '../../components/notification/Notification.jsx';

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessages, setErrorMessages] = useState([])
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    setErrorMessages([])
    try {
      const user = await api.post('/auth/register', {
        "name": name,
        "email": email,
        "password": password 
      });

      setSuccessMessage("Usuario creado satisfactoriamente")
      setTimeout(() => {
        user.data && window.location.replace('/login')
      }, 3000);
     
    } catch (error) {
      console.log(error.response.data)
      setErrorMessages(error.response.data);
      
    }
  }

  return ( 
    <div className="register">
      <div className="registerTitle">IDCAS Blog Registrate</div>
      <form className="registerForm" onSubmit={handleSubmit} >
          { errorMessages.length ?
            <Notification message={errorMessages[0].msg} type="error  " /> : ''
          }
          { successMessage ?
            <Notification message={successMessage} type="error  " /> : ''
          }
          <label>Nombre</label>
          <input 
            type="text" 
            placeholder="Escribe su nombre" 
            onChange={(e) => {setName(e.target.value)}}
          />
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Escribe su email" 
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Escribe su password" 
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <button className="registerSubmit" type="submit">Crear</button>
      </form>
      <button className="registerLogin">
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
    
   );
}
 
export default Register;