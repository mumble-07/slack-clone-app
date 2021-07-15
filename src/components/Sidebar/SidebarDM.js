import { useContext } from "react";
import axios from 'axios';
import UserContext from "../../api/user-context.js";

const SidebarDM = () => {
  
  const { 
    rawUserList,
    chatScreenData, 
  } =  useContext(UserContext);


  const showChatScreen = (e) => {
    chatScreenData.type = e.currentTarget.type;
    chatScreenData.receivers = [{ 
      id: e.currentTarget.id,
      name: e.currentTarget.getAttribute("name"),
      type: e.currentTarget.type,
    }]

    // console.log(typeof chatScreenData.receivers[0].id)
    // console.log(typeof userDetails[0].id)
    // console.log(chatScreenData.receivers[0].id)
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
