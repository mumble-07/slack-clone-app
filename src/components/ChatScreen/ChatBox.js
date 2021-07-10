import "./ChatBox.css";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <h3>Chat Here</h3>
      <div className="chat-box-icons">
        <FlashOnIcon />
      </div>
    </div>
  );
};

export default ChatBox;
