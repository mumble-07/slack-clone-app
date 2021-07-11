import "./ChatBox.css";
import React, { useContext, useState } from "react";
import UserContext from "../../api/user-context";
import axios from 'axios';
import SendIcon from '@material-ui/icons/Send';
import FlashOnIcon from "@material-ui/icons/FlashOn";


const ChatBox = () => {
  const {userDetails, userListHeaders, chatScreenData} = useContext(UserContext);
  const {type, receivers} = chatScreenData;
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);


  const inputMessageHandler = (e) => {
    setMessage(e.target.innerHTML)
    e.target.innerHTML ? setDisabled(false) : setDisabled(true)
  }

  
  const sendMessageHandler = (e) => {
    e.preventDefault();
    console.log(userListHeaders)
    console.log(userDetails)

    receivers.forEach((receiver) => {
      const sendMessageConfig = {
        method: 'post',
        url: 'http://206.189.91.54//api/v1/messages',
        headers: userListHeaders,
        data: {
          "receiver_id": receiver[0],
          "receiver_class": "User",
          "body": JSON.stringify(message),
        },
        redirect: 'follow'
      }

      axios(sendMessageConfig)
      .then((response) => { 
        alert(`Message Sent, ${JSON.stringify(response.data)}`);
        console.log(JSON.stringify(response.headers))
      })
      .catch(function (error) { console.log(error);});
    })
  }



  return (
    <div className="chat-box">
      <div className="input-message" contentEditable={true} placeholder="Message **User**" spellCheck={false} onInput={inputMessageHandler}></div>
      <div className="input-message-options">
        <div className="chat-box-icons">
          <FlashOnIcon />
        </div>
        <button className="send-message-button" disabled={disabled} onClick={sendMessageHandler}><SendIcon/></button>
      </div>
    </div>
  );
};

export default ChatBox;
