import { TiLockClosed } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import "./ChatScreenHeader.css";

const ChatScreenHeader = () => {
  return (
    <div>
      <div>Chat Screeen</div>
      <div className="header">
        <button type="button" className="header-button">
          <TiLockClosed className="lock-icon" />
          <h1 className="chat-screen-label">batch9</h1>
          <TiArrowSortedDown />
        </button>
        <div className="avatar-icons">

        </div>
      </div>
    </div>
  );
};

export default ChatScreenHeader;
