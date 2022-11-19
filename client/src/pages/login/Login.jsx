import React, { useContext, useState, useRef } from 'react'
import api from '../../api/posts.js';
import { Link } from 'react-router-dom';
import './login.css'
import { Context } from '../../context/Context.js';
import Notification from '../../components/notification/Notification.jsx';


const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)
  const [errorMessages, setErrorMessages] = useState([])

  const handleLogin = async e => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })

    try {
        const { data } = await api.post('/auth/login', {
          email: emailRef.current.value,
          password: passwordRef.current.value
        });

        dispatch({ type: "LOGIN_SUCCESS", payload: data })
        console.log(data)

      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE" })
        console.log(error)
        setErrorMessages(error.response.data);
      }
  }

  console.log(isFetching)

  return ( 
    <div className="login">
      <div className="loginTitle">IDCAS Blog Login</div>
      <form className="loginForm" onSubmit={handleLogin}>
        { errorMessages.length ?
            <Notification message={errorMessages[0].msg} type="error" /> : ''
          }

          <label>Email</label>
          <input 
            type="email" 
            placeholder="Escribe el email" 
            ref={emailRef}
          />

          <label>Password</label>
          <input 
            type="password" 
            placeholder="Escribe el password" 
            ref={passwordRef}
          />
          <button className="loginSubmit" type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegister">
        <Link className="link" to="/register">Registrate</Link>
      </button>
    </div>
   );
}
 
export default Login;