import { useState, useContext, useEffect } from "react";
import UserContext from "../../api/user-context.js";
import axios from "axios";
import "./Sidebar.css";
import "boxicons";

import SidebarChannel from "./SidebarChannel";
import SidebarDM from "./SidebarDM";
import AddChannel from '../Channels/AddChannel';

const Sidebar = () => {
  const { chatScreenData, 
    userDetails, 
    allMessages, 
    userListHeaders, 
    channelList, 
    rawUserList, 
    setUpHeaders} = useContext(UserContext); 

  const [toggleChannel, setToggleChannel] = useState(false);
  const [toggleDM, setToggleDM] = useState(false);
  const [openChannel, setOpenChannel] = useState(false)

  const toggleChannelHandler = () => {
    setToggleChannel((prevValue) => !prevValue);
  };

  const toggleDMHandler = () => {
    setToggleDM((prevValue) => !prevValue);
  };

  const openChannelHander = () => {
    setOpenChannel(true)
  }

  const closeChannelHandler = () => {
    setOpenChannel(false)
  }

  const storage = localStorage.getItem("user");
  if (storage) {
    const {
      "access-token": accessToken,
      client,
      expiry,
      uid,
    } = JSON.parse(storage);
    setUpHeaders(accessToken, client, expiry, uid);
  }
   
  useEffect(() => {
    axios
      .get("http://206.189.91.54//api/v1/channels", {
        headers: userListHeaders,
      })
      .then((res) => {
        const { data } = res;
        channelList.push(data);
      })
      .catch((error) => console.error("Error fetching data from API"));
  }, []);

  useEffect(() => {
    axios
      .get("http://206.189.91.54//api/v1/users", { headers: userListHeaders })
      .then((res) => {
        const { data } = res;
        if (data.length == 0) {
          console.log("No available users");
          return;
        }
        rawUserList.push(data.data);
        retrieveAllMessages(); //retrieve all DM
      })
      .catch((error) => console.error("Error fetching data from API"));
  }, []);

  const retrieveAllMessages = () => {
    for (const list of rawUserList[0]) {
      axios.get("http://206.189.91.54//api/v1/messages", {
      headers: userListHeaders, 
      params:  {
      "sender_id": userDetails[0].id.toString(),
      "receiver_class": "User",
      "receiver_id": list.id.toString(),
      },})
      .then((response) => response.data.data)
      .then((result) => {
      if(result.length > 0) {
        allMessages.push(result)
      }
      })
      .catch((error) => error)
    }
  }

  const setChatScreenData = () => {
    chatScreenData["type"] = "new";
    chatScreenData["receivers"] = [];
  };

  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="channel-details">
          <div className="channel_name">Group 5</div>
          <box-icon name="edit" onClick={setChatScreenData}></box-icon>
        </div>
        <ul className="nav-links">
          <li>
            <box-icon name="message-alt-detail"></box-icon>
            <span className="links_name">Threads</span>
          </li>
          <li>
            <box-icon name="conversation"></box-icon>
            <span className="links_name">All DMs</span>
          </li>
          <li>
            <box-icon name="file-blank"></box-icon>
            <span className="links_name">Drafts</span>
          </li>
          <li>
            <box-icon name="message-alt-error"></box-icon>
            <span className="links_name">Mention & reactions</span>
          </li>
          <li>
            <div className="icon-link">
              <div className="channelsHandler" onClick={toggleChannelHandler}>
                {!toggleChannel && (
                  <box-icon name="chevron-right-circle"></box-icon>
                )}
                {toggleChannel && (
                  <box-icon name="chevron-down-circle"></box-icon>
                )}
                <span className="links_name">Channels</span>
              </div>
            </div>
            <ul className="sub-menu">
              <li onClick={openChannelHander}>
                  <box-icon name="lock-alt"/>Add channels
              </li>
              {toggleChannel && <SidebarChannel />}
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <div className="dmHandler" onClick={toggleDMHandler}>
                {!toggleDM && <box-icon name="chevron-right-circle"></box-icon>}
                {toggleDM && <box-icon name="chevron-down-circle"></box-icon>}
                <span className="links_name">Direct Messages</span>
              </div>
            </div>
            <ul className="sub-menu dm-list">
              {toggleDM && <SidebarDM className="sidebarDM" />}
            </ul>
          </li>
        </ul>
        {openChannel && <AddChannel onClose={closeChannelHandler}/>}
      </div>
    </div>
  );
};

export default Sidebar;