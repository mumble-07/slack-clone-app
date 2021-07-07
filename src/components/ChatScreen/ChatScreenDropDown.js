import "./ChatScreenDropDown.css";
import { TiPin } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
const ChatScreenDropDown = () => {
  return (
    <div className="drop-down-header">
      <div className="pin-items">
        <TiPin className="pin-icon" />
        Pinned
      </div>
      <div className="add-book-mark">
        <TiPlus />
        <div>Add a bookmark </div>
      </div>
    </div>
  );
};

export default ChatScreenDropDown;
