import React from "react";
import logo from "./../../../img/logo.png"
import profilePhoto from "./../../../img/profile.jpg"
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <NavLink className={s.NavLink} to={`/messages/${props.id}`} activeClassName={s.active}>
                <img src={profilePhoto}/>
                <div className={s.item_text}>
                    <h3>{props.name}</h3>
                    <p>{props.message}</p>
                </div>
            </NavLink>
        </div>
    )
}
export default DialogItem;