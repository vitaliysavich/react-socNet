import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props)=>{

    let postElements = props.postData.map(p => <Post likeCounter={p.likeCounter} message={p.message} id={p.id}/>)

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.addTextValue(text);
    }

    let addPost = () => {
        props.addPost();
    }
    let newPostElement = React.createRef();


    return (
        <div className={s.posts}>
            <textarea placeholder="Enter a post text..." cols="70" rows="5" ref={newPostElement} onChange={onPostChange} defaultValue={props.newPostText}/>
            <button onClick={addPost}>Add Post</button>
            <hr/>
            {postElements}
        </div>
    );
}

export default MyPosts;