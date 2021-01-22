import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
    console.log(props);
    let messages = props.state.messageData.map(p => <Message name={p.name} message={p.message}/>);
    let dialogs = props.state.dialogData.map(p => <DialogItem id={p.id} name={p.name} lastMessage={p.message}/>);

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <div className={s.sendMessage}>
                    <textarea placeholder="Enter a message..." cols="100" rows="5" ref={newMessage}></textarea>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;