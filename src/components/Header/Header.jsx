import React from "react";
import logo from "./../../img/logo.png"
import profilePhoto from "./../../img/profile.jpg"
import s from "./Header.module.css"

const Header= () =>{
    return (
    <header>
        <div className={s.header__logo}>
          <img src={logo} alt="logo"></img>
        </div>
        <div>
          <h1>HanurNet</h1>
        </div>
        <div className={s.header__profile}>
          <img src={profilePhoto} alt="ProfilePhoto"/>
          <p>Richard Hendricks</p>
        </div>
    </header>
    );
}

export default Header;