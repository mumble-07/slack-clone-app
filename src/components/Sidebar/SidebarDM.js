import { useContext } from "react";
import UserContext from "../../api/user-context.js";
import { useState } from "react";
import {v4} from 'uuid';

const SidebarDM = () => {
  const {
    userDetails,
    chatScreenData,
    allMessages,
  } = useContext(UserContext);

  const showChatScreen = (e) => {
    chatScreenData.type = e.currentTarget.type;
    chatScreenData.receivers = [
      {
        id: e.currentTarget.id,
        name: e.currentTarget.getAttribute("name"),
        type: e.currentTarget.type,
      },
    ];
    localStorage.setItem("params", JSON.stringify(chatScreenData));
  };

  //Searh Bar
  const [searchUser, setSearchUser] = useState("");

  return (
    <>
      <input
        style={{ width: "100%" }}
        type="text"
        placeholder="search user"
        onChange={(event) => {
          setSearchUser(event.target.value);
        }}
      />
        {allMessages
        .filter((value) => {
          if (searchUser === "") {
            return value;
          } else {
            return value[0].receiver.uid.toLowerCase().includes(searchUser.toLowerCase())
          }
        })
        .map((directMessages) => {
          let receiver;
          
          if(directMessages[0].receiver.id !== userDetails[0].id){
            receiver = directMessages[0].receiver;
          } else {
            receiver = directMessages[0].sender;
          }
          const receiverName = receiver.name ? receiver.name : receiver.email;

          return (
            <li
            key={v4()}
            id={receiver.id}
            name={receiverName}
            type="User"
            onClick={showChatScreen}
            >
            <box-icon name="user-circle"></box-icon> {receiver.email.split('@').shift()}{" "}
          </li>
          )
         })

        }
    </>
  );
};

export default SidebarDM;
