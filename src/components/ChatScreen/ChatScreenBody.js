import "./ChatScreenBody.css";
import user1 from "../../assets/user1.png";

const ChatScreenBody = () => {
  return (
    <div className="chat-screen-body">
      <div className="user-chat-header">
        <div className="chat-user">
          <img src={user1} />
          <h1>User 1</h1>
        </div>
      </div>
    </div>
  );
};

export default ChatScreenBody;
