import "./ChatScreenDropDown.css";
import { TiPin } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

const ChatScreenDropDown = () => {
  return (
    <div className="drop-down-header">
      <div className="pin-items">
        <TiPin className="pin-icon" />
        <h3>Pinned</h3>
      </div>
      <div className="add-book-mark">
        <TiPlus className="add-book-mark-plus" />
        <h3>Add a bookmark</h3>
      </div>
    </div>
  );
};

export default ChatScreenDropDown;
