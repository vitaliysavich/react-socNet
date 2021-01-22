import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state.js";
import {addTextValue} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addTextValue={addTextValue}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
