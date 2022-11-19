import React, { useEffect, useState } from 'react'
import api from '../../api/posts.js'
import './sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = ( async () => {
      const { data } = await api.get('/categories');
      setCategories(data.categories);
    });
    getCategories();
  }, [])
  return (
     <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">Nosotros</span>
          <div className="sidebarImgWrap">
            <img className="sidebarImg" src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557399_960_720.jpg" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat sunt repudiandae doloremque.</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Categorías</span>
          <ul className="sidebarList">
            { categories.map(category => (
              <li className="sidebarListItem" key={Math.floor(Math.random() * 10000)}>
                <Link className="link" to={`/?category=${category.name}`}>{ category.name }</Link>
              </li>
            )) }
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Siguenos</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-square-youtube"></i>
          </div>
        </div>
      </div>
  );
}
 
export default Sidebar;