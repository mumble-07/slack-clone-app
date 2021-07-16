import "./ChatScreenBody.css";
import ChatsRetrieved from "./ChatsRetrieved";

const ChatScreenBody = () => {
  return (
      <div className="chat-screen-body">
        <div className="user-chat-body">
          <ChatsRetrieved />
        </div>
      </div>
  );
};

export default ChatScreenBody;
