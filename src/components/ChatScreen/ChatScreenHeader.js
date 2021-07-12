import { TiLockClosed } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiPhoneOutline } from "react-icons/ti";
import "./ChatScreenHeader.css";
import user1 from "../../assets/user1.png";
import { useContext } from "react";
import UserContext from "../../api/user-context";

const ChatScreenHeader = () => {
  const {chatScreenData} = useContext(UserContext);
  const {type, receivers} = chatScreenData;

  return (
    <div className="chat-screen-header">
      {type === "new" ? <h4 className="chat-screen-label new-message">New Message</h4> :
      <>
        <button type="button" className="chat-screen-header-button">
          <TiLockClosed className="lock-icon" />
          <h1 className="chat-screen-label">{receivers[0].name}</h1>
          <TiArrowSortedDown />
        </button>
        <div className="chat-screen-header-right-side">
          <TiPhoneOutline className="call-icon" />
          <div className="avatar-icons">
            <img src={user1} />
          </div>
        </div>
      </>
      }
    </div>
  );
};


export default ChatScreenHeader;
