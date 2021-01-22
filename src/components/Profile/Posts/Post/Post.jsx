import React from "react";
import s from "./Post.module.css"
import ava from "./../../../../img/richard.png"

const Post = (props)=>{
    return (
        <div className={s.post}>
            <img src={ava}/>
            <p className={s.text}>{props.message}</p>
            <span>{props.likeCounter}Like</span>
            <hr />
        </div>
    );
}

export default Post;