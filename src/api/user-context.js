import { createContext } from "react";

const UserContext = createContext({
  userDetails: [],
  userListHeaders: {
    "access-token": "",
    client: "",
    expiry: "",
    uid: "",
      },
  rawUserList: [],
  channelList: [],
  dmList: [],
  chatScreenData: {
    type: "Channel",
    receivers: [{ id: "", name: "batch9", type: "Channel" }],
  },
  params: {
    sender_id: "",
    recever_class: "",
    receiver_id: "",
  },
  // retrieveMessageAccountOwnerReceiver:{
  //   sender_id: "",
  //   receiver_class: "",
  //   receiver_id: "",
  // },
  // retrieveMessageAccountOwnerSender:{
  //   sender_id: "",
  //   receiver_class: "",
  //   receiver_id: "",
  // },
  currentMessage: [],
});

export default UserContext;
