import React from 'react'
import './header.css'

const Header = () => {
  return ( 
    <div>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">
            IDCAS - Calidad que Trasciende
          </span>
          <span className="headerTitleLg">
            Blog
          </span>
        </div>
        <div className="headerImageContainer">
          <img className="headeerImage" src="https://cdn.pixabay.com/photo/2022/08/27/18/29/lake-7415097_960_720.jpg" alt="" />
        </div>
      </div>
    </div>
   );
}
 
export default Header;