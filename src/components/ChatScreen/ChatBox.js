import "./ChatBox.css";
import React, { useContext, useState } from "react";
import UserContext from "../../api/user-context";
import axios from 'axios';
import SendIcon from '@material-ui/icons/Send';
import FlashOnIcon from "@material-ui/icons/FlashOn";


const ChatBox = () => {
  const {userDetails, userListHeaders, userList} = useContext(UserContext);
  const [message, setMessage] = useState("");




// //GET ALL USERS
//   const configGetUsers = {
//     method: 'get',
//     url: 'http://206.189.91.54//api/v1/users',
//     headers: userListHeaders,
//   };

//   axios(configGetUsers)
//   .then((response) => { console.log(JSON.stringify(response.data));})
//   .then(data => console.log(data))
//   .catch(function (error) { console.log(error);});


//SEND MESSAGE TO ID:30 sample2@example.com
  const sendMessageConfig = {
      method: 'post',
      url: 'http://206.189.91.54//api/v1/messages',
      headers: userListHeaders,
      data: {
        "receiver_id": 30,
        "receiver_class": "User",
        "body": JSON.stringify(message),
      },
      redirect: 'follow'
    }
    
  const sendMessageHandler = (e) => {
    e.preventDefault();
    console.log(userListHeaders)
    console.log(userDetails)
    axios(sendMessageConfig)
    .then((response) => { 
      console.log(JSON.stringify(response.data));
      console.log(JSON.stringify(response.headers))
    })
    .catch(function (error) { console.log(error);});
  }



  return (
    <div className="chat-box">

      {/* <h3>Chat Here</h3> */}
      {/* <textarea className="input-message" name="message" placeholder="Message **Name**" autoFocus value={message} onChange={(e) => setMessage(e.target.value)} ></textarea> */}
      <div className="input-message" contentEditable={true} spellcheck={false} onInput={(e) => setMessage(e.target.innerHTML)}></div>
      <div className="input-message-options">
        <button className="send-message" onClick={sendMessageHandler}>Send<SendIcon/></button>

      <h3>Chat Here</h3>
      <div className="chat-box-icons">
        <FlashOnIcon />

      </div>
    </div>
  );
};

export default ChatBox;
