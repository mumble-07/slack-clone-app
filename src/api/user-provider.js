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
    channelDetails,
  } = useContext(UserContext);

  const [modalsDisplay, setModalDisplay] =useState(false)

  const closeModals = () => {
    setModalDisplay(false)
  }

  const openModals = () => {
    setModalDisplay(true)
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
        channelDetails
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
