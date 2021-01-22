import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addTextValue} from "./redux/state";


function App(props) {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app_wrapper_content">
          <Route path="/profile" render={() => <Profile postData={props.state.profilePage.postData} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} addTextValue={addTextValue}/>} />
          <Route path="/messages" render={() => <Dialogs state={props.state.dialogsPage}/>} />
      </div>

    </div>
      </BrowserRouter>
  );
}

export default App;
