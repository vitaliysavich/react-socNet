import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to="/profile" activeClassName={s.active}>My Profile</NavLink></li>
                <li><NavLink to="/">Something</NavLink></li>
                <li><NavLink to="#">Something</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;