import "./ChatScreen.css";
import ChatScreenHeader from "./ChatScreenHeader";
import ChatScreenDropDown from "./ChatScreenDropDown";
import ChatScreenBody from "./ChatScreenBody";

const ChatScreen = () => {
  return (
    <div>
      <ChatScreenHeader />
      <ChatScreenDropDown />
      <ChatScreenBody />
    </div>
  );
};

export default ChatScreen;
