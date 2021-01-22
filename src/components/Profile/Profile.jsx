import React from "react";
import background from "./../../img/bckgr.jpg"
import profilePhoto from "./../../img/richard.png"
import s from "./Profile.module.css"
import MyPosts from "./Posts/MyPosts";


const Profile= (props) =>{
    return (
      <div className={s.profile}>
        <div className={s.profile__head}>
          <img src={background} alt="background"/>
        </div>
        <div className={s.profile__info}>
          <img src={profilePhoto} alt="profilePhoto"/>
          <div className={s.profile__text}>
          <h2>Richard Hendricks</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate quaerat libero laborum sed, dolores animi aperiam ipsum. Consequuntur quia ducimus mollitia facilis id nihil vitae pariatur amet aperiam porro!</p>
          </div>
        </div>
          <MyPosts postData={props.postData} addPost={props.addPost} newPostText={props.newPostText} addTextValue={props.addTextValue}/>
      </div>

    );
}

export default Profile;