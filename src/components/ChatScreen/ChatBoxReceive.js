import React, { useContext, useState, useRef } from "react";
import UserContext from "../../api/user-context";
import axios from "axios";

const ChatBoxReceive = () => {
  const { userDetails, userListHeaders, chatScreenData } =
    useContext(UserContext);

  // RETRIVE MESSAGES

  const receiveMessage = () => {
    axios
      .get("http://206.189.91.54//api/v1/messages", {
        headers: userListHeaders,
        params: {
          // sender_id: 86,
          // receiver_class: "User",
          // receiver_id: 139,

          sender_id: userDetails[0].id || "",
          receiver_class: chatScreenData.receivers[0].type || "",
          receiver_id: chatScreenData.receivers[0].id || "",
        },
      })
      .then((response) => response)
      .then((result) => console.log(result))
      .catch((error) => error);
  };

  const retrieveMessageRequest = {
    "access-token": userListHeaders["access-token"],
    client: userListHeaders.client,
    expiry: userListHeaders.expiry,
    uid: userListHeaders.uid,
    sender_id: userDetails.id || "",
    receiver_class: chatScreenData.receivers[0].type || "",
    receiver_id: chatScreenData.receivers[0].id || "",
  };

  const retrieveMessageHandler = () => {
    const dataRM = receiveMessage(retrieveMessageRequest);
    console.log(dataRM);
    receiveMessage();
  };

  return <button onClick={retrieveMessageHandler()}></button>;
};

export default ChatBoxReceive;
