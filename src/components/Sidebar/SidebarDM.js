import { ContactlessOutlined } from "@material-ui/icons";
import { useContext } from "react";
import axios from 'axios';
import UserContext from "../../api/user-context.js";

const SidebarDM = () => {
  
  const { 
    rawUserList,
    userDetails, 
    userListHeaders, 
    chatScreenData, 
    retrieveMessageAccountOwnerReceiver, 
    retrieveMessageAccountOwnerSender, 
    setUpretrieveMessageAccountOwnerReceiver, 
    setUpretrieveMessageAccountOwnerSender,
    currentMessage } =  useContext(UserContext);

    const showChatScreen = (e) => {
        chatScreenData.type = e.currentTarget.type;
        chatScreenData.receivers = [{ 
            id: e.currentTarget.id,
            name: e.currentTarget.getAttribute("name"),
            type: e.currentTarget.type,
        }]
        setUpretrieveMessageAccountOwnerReceiver(Number(chatScreenData.receivers[0].id),chatScreenData.receivers[0].type,Number(userDetails[0].id));
        setUpretrieveMessageAccountOwnerSender(Number(userDetails[0].id),chatScreenData.receivers[0].type,Number(chatScreenData.receivers[0].id));
        //retrieve message as receiver
        axios.get("http://206.189.91.54//api/v1/messages", {
        headers: userListHeaders, params: retrieveMessageAccountOwnerReceiver,
        })
        .then((response) => response)
        .then((result) => currentMessage.push(result))
        .catch((error) => error)

        //retrieve message as sender
        axios.get("http://206.189.91.54//api/v1/messages", {
        headers: userListHeaders, params: retrieveMessageAccountOwnerSender
          })
        .then((response) => response)
        .then((result) => currentMessage.push(result))
        .catch((error) => error)
        }
    
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
