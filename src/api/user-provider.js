import { useContext } from "react";
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
    retrieveMessageAccountOwnerReceiver,
    retrieveMessageAccountOwnerSender,
    currentMessage
  } = useContext(UserContext);

  const setUpHeaders = (accessToken, client, expiry, uid) => {
    userListHeaders["access-token"] = accessToken;
    userListHeaders["client"] = client;
    userListHeaders["expiry"] = expiry;
    userListHeaders["uid"] = uid;
  };

  const setUpretrieveMessageAccountOwnerReceiver = (sender_id,receiver_class,receiver_id) => {
    retrieveMessageAccountOwnerReceiver.sender_id = sender_id;
    retrieveMessageAccountOwnerReceiver.receiver_class = receiver_class;
    retrieveMessageAccountOwnerReceiver.receiver_id = receiver_id;
  }

  const setUpretrieveMessageAccountOwnerSender = (sender_id,receiver_class,receiver_id) => {
    retrieveMessageAccountOwnerSender.sender_id = sender_id;
    retrieveMessageAccountOwnerSender.receiver_class = receiver_class;
    retrieveMessageAccountOwnerSender.receiver_id = receiver_id;
  }


  return (
    <UserContext.Provider
      value={{
        userDetails,
        userListHeaders,
        rawUserList,
        setUpHeaders,
        setUpretrieveMessageAccountOwnerReceiver,
        setUpretrieveMessageAccountOwnerSender,
        channelList,
        dmList,
        chatScreenData,
        params,
        retrieveMessageAccountOwnerReceiver,
        retrieveMessageAccountOwnerSender,
        currentMessage
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
