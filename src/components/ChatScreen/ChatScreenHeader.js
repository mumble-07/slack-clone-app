import { TiLockClosed } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiPhoneOutline } from "react-icons/ti";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "./ChatScreenHeader.css";
import user1 from "../../assets/user1.png";
import { useContext, useState } from "react";
import UserContext from "../../api/user-context";
import AddUsers from "../Channels/AddUsers";
import ChannelDetails from "../Channels/ChannelDetails";

const ChatScreenHeader = () => {
  const {chatScreenData} = useContext(UserContext);
  const [openAddUsers, setOpenAddUsers] = useState(false)
  const [openChannelDetails, setOpenChannelDetails] = useState(false)
  const {type, receivers} = chatScreenData;
  
  const openAddUsersHandler = () => {
    setOpenAddUsers(true)
  }

  const closeAddUsersHandler = () => {
    setOpenAddUsers(false)
  }

  const openChannelDetailsHandler = () => {
    setOpenChannelDetails(true)
  }

  const closeChannelDetailsHandler = () => {
    setOpenChannelDetails(false)
  }

  return (
    <div className="chat-screen-header">
      {type === "new" ? <h4 className="chat-screen-label new-message">New Message</h4> :
      <>
        <button type="button" className="chat-screen-header-button">
          <TiLockClosed className="lock-icon" />
          <h1 className="chat-screen-label">{receivers[0]?.name}</h1>
          <TiArrowSortedDown />
        </button>
        <div className="chat-screen-header-right-side">
          {receivers[0]?.type === "Channel" ? <SettingsApplicationsIcon className="add-members-icon" onClick={openChannelDetailsHandler}/> : <TiPhoneOutline className="call-icon" />}
          {receivers[0]?.type === "Channel" ? <AddCircleIcon className="add-members-icon" onClick={openAddUsersHandler}/> : <div className="avatar-icons"><img src={user1}/> </div>}
        </div>
          {openAddUsers && <AddUsers onClose={closeAddUsersHandler}/>}
          {openChannelDetails && <ChannelDetails onClose={closeChannelDetailsHandler}/>}
      </>
      }
    </div>
  );
};


export default ChatScreenHeader;
