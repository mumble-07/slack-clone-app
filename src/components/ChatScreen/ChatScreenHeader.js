import { TiLockClosed } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiPhoneOutline } from "react-icons/ti";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "./ChatScreenHeader.css";
import user1 from "../../assets/user1.png";
import { useContext, useState } from "react";
import UserContext from "../../api/user-context";
import AddUsers from "../Channels/AddUsers";

const ChatScreenHeader = () => {
  const {chatScreenData} = useContext(UserContext);
  const [openAddUsers, setOpenAddUsers] = useState(false)
  const {type, receivers} = chatScreenData;
  
  const openAddUsersHandler = () => {
    setOpenAddUsers(true)
  }

  const closeAddUsersHandler = () => {
    setOpenAddUsers(false)
  }


  const storage = JSON.parse(localStorage.getItem("params"));

  return (
    <div className="chat-screen-header">
      {type === "new" ? <h4 className="chat-screen-label new-message">New Message</h4> :
      <>
        <button type="button" className="chat-screen-header-button">
          <TiLockClosed className="lock-icon" />
          <h1 className="chat-screen-label">{storage? storage.receivers[0].name : receivers[0]?.name}</h1>
          <TiArrowSortedDown />
        </button>
        <div className="chat-screen-header-right-side">
          <TiPhoneOutline className="call-icon" />
          {receivers[0]?.type === "Channel" ? <AddCircleIcon className="add-members-icon" onClick={openAddUsersHandler}/> : <div className="avatar-icons"><img src={user1} alt="user"/> </div>}
        </div>
          {openAddUsers && <AddUsers onClose={closeAddUsersHandler}/>}
      </>
      }
    </div>
  );
};


export default ChatScreenHeader;
