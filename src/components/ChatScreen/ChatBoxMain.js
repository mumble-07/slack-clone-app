import ChatBoxSend from "./ChatBoxSend";
import ChatBoxReceive from "./ChatBoxReceive";
import { defaultMaxListeners } from "events";

const ChatBoxMain = () => {
  return (
    <div>
      <ChatBoxReceive />
      <ChatBoxSend />
    </div>
  );
};

export default ChatBoxMain;
