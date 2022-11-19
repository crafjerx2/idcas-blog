import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css'

const Settings = () => {
  return ( 
    <div className="settings">
      <div className="settingsWrap">
        <div className="settingsTitles">
          <span className="settingsUpdateTitle">Actualiza tu cuenta</span>
          <span className="settingsDeleteTitle">Elimina tu cuenta</span>
        </div>
        <form className="settingsForm">
          <label>Actuliza tu Perfil</label>
          <div className="settingsPP">
            <img className="settingsImg" src="https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_960_720.jpg" alt=""  />
            <label htmlFor="fileInput"><i className="settingsIcon fa-regular fa-user"></i></label>
            <input type="file" id="fileInput" style={{ display: "none" }}/>
          </div>
          <label>Usuario</label>
          <input type="text" placeholder="mikel123" />
          <label>Email</label>
          <input type="email" placeholder="mikel123@idcas.edu.do" />
          <label>Password</label>
          <input type="password"  />
          <button className="settingsSubmit">Actualizar</button>
        </form>
      </div>
      <Sidebar />
    </div>
   );
}
 
export default Settings;