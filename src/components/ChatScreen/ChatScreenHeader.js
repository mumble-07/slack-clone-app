import { TiLockClosed } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import "./ChatScreenHeader.css";
import user1 from "../../assets/user1.png";

const ChatScreenHeader = () => {
  return (
    <div>
      <div className="chat-screen-header">
        <button type="button" className="chat-screen-header-button">
          <TiLockClosed className="lock-icon" />
          <h1 className="chat-screen-label">batch9</h1>
          <TiArrowSortedDown />
        </button>
        <div className="avatar-icons">
          <img src={user1} />
        </div>
      </div>
    </div>
  );
};

export default ChatScreenHeader;
