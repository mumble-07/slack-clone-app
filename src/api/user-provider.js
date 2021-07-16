import { useContext, useState } from "react";
import UserContext from "./user-context.js";

const UserProvider = (props) => {
  const {
    userDetails,
    userListHeaders,
    rawUserList,
    channelList,
    dmList,
    chatScreenData,
    params,
    currentMessage,
    allMessages,
    additionalMembers,
  } = useContext(UserContext);

  const [modalsDisplay, setModalsDisplay] = useState(false)

  const closeModals = () => {
    setModalsDisplay(false)
  }

  const openModals = () => {
    setModalsDisplay(true)
  }

  const setUpHeaders = (accessToken, client, expiry, uid) => {
    userListHeaders["access-token"] = accessToken;
    userListHeaders["client"] = client;
    userListHeaders["expiry"] = expiry;
    userListHeaders["uid"] = uid;
  };
 

  return (
    <UserContext.Provider
      value={{
        userDetails,
        userListHeaders,
        rawUserList,
        setUpHeaders,
        channelList,
        dmList,
        chatScreenData,
        params,
        currentMessage,
        closeModals,
        openModals,
        modalsDisplay,
        allMessages,
        additionalMembers
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
