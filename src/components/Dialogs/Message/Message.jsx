import React from "react";
import logo from "./../../../img/logo.png"
import profilePhoto from "./../../../img/profile.jpg"
import s from "./../Dialogs.module.css"


const Message = (props) =>{
    return (
        <div className={s.message}>
            <div className={s.message_sender}>
                <img src={profilePhoto}/>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
            </div>
        </div>
    )
}
export default Message;