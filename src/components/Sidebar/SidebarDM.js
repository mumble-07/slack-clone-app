import { useContext, useEffect } from "react";
import axios from 'axios';
import UserContext from "../../api/user-context.js";

const SidebarDM = () => {
  
  const { 
    rawUserList,
    userDetails, 
    userListHeaders, 
    chatScreenData, 
    currentMessage,
  } =  useContext(UserContext);

  //retrieve messages API call
  const retrieveMessage = () => {
    axios.get("http://206.189.91.54//api/v1/messages", {
    headers: userListHeaders, 
    params:  {
      "sender_id": userDetails[0].id.toString(),
      "receiver_class": "User",
      "receiver_id": chatScreenData.receivers[0].id,
    },})
    .then((response) => response.data.data)
    .then((result) => {
      currentMessage[0]= result;
      console.log(currentMessage[0])
    })
    .catch((error) => error)
  }

  const showChatScreen = (e) => {
    chatScreenData.type = e.currentTarget.type;
    chatScreenData.receivers = [{ 
      id: e.currentTarget.id,
      name: e.currentTarget.getAttribute("name"),
      type: e.currentTarget.type,
    }]

    retrieveMessage();
    // console.log(typeof chatScreenData.receivers[0].id)
    // console.log(typeof userDetails[0].id)
    // console.log(chatScreenData.receivers[0].id)
  }

  useEffect(() => {
    setInterval(retrieveMessage, 1000)
    return function cleanup() {
      clearInterval(retrieveMessage);
    };
  }, [chatScreenData])

  
  return (
    <>
      {rawUserList[0].map((user) => {
        const userName = user.name ? user.name : user.email;
        return (
          <li
            key={user.id}
            id={user.id}
            name={userName}
            type="User"
            onClick={showChatScreen}
          >
              <box-icon name="user-circle"></box-icon> {user.email}{" "}
          </li>
        );
      })}
    </>
  );
};

export default SidebarDM;
