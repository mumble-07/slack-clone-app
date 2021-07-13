import "./ChatBoxSend.css";
import React, { useContext, useState, useRef } from "react";
import UserContext from "../../api/user-context";
import axios from "axios";
import SendIcon from "@material-ui/icons/Send";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { data } from "jquery";

const ChatBoxSend = () => {
  const { userDetails, userListHeaders, chatScreenData } =
    useContext(UserContext);
  const { type, receivers } = chatScreenData;
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const textBox = useRef();

  const inputMessageHandler = (e) => {
    setMessage(e.target.innerHTML);
    e.target.innerHTML ? setDisabled(false) : setDisabled(true);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    console.log(userListHeaders);
    console.log(userDetails);
    console.log(receivers);

    receivers.forEach((receiver) => {
      const sendMessageConfig = {
        method: "post",
        url: "http://206.189.91.54//api/v1/messages",
        headers: userListHeaders,
        data: {
          receiver_id: receiver.id,
          receiver_class: receiver.type,
          body: JSON.stringify(message),
        },
        redirect: "follow",
      };

      axios(sendMessageConfig)
        .then((response) => {
          // alert(`Message Sent, ${JSON.stringify(response.data)}`);
          console.log(JSON.stringify(response.data));
          textBox.current.innerHTML = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };

  //CHATBOX PLACEHOLDER
  const receiverNames = receivers.map((receiver) => {
    return receiver.name;
  });
  const chatBoxPlaceHolder = `Message ${
    receiverNames.length > 0 ? receiverNames.join(", ") : "here..."
  }`;

  return (
    <div className="chat-box">
      <div
        className="input-message"
        ref={textBox}
        contentEditable={true}
        placeholder={chatBoxPlaceHolder}
        spellCheck={false}
        onInput={inputMessageHandler}
      ></div>
      <div className="input-message-options">
        <div className="chat-box-icons">
          <FlashOnIcon />
        </div>
        <button
          className="send-message-button"
          disabled={disabled}
          onClick={sendMessageHandler}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatBoxSend;
