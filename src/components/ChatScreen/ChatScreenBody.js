import "./ChatScreenBody.css";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
const ChatScreenBody = () => {
  return (
    <div className="chat-screen-body">
      <div className="user-chat-body">
        <div className="user-chat">
          <img src={user1} />
          <h1>User Name</h1>
        </div>
        <div className="user-chat">
          <img src={user2} />
          <h1>User Name</h1>
        </div>
      </div>
    </div>
  );
};

export default ChatScreenBody;
