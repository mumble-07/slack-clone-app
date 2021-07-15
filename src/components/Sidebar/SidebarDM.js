import { useContext } from "react";
import axios from "axios";
import UserContext from "../../api/user-context.js";
import { useState } from "react";

const SidebarDM = () => {
  const {
    rawUserList,
    userDetails,
    userListHeaders,
    chatScreenData,
    currentMessage,
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
      {rawUserList[0]
        .filter((value) => {
          if (searchUser === "") {
            return value;
          } else if (
            value.uid.toLowerCase().includes(searchUser.toLowerCase())
          ) {
            return value;
          }
        })
        .map((user) => {
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
