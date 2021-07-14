import ChatBoxSend from "./ChatBoxSend";
import ChatBoxRetrieve from "./ChatBoxRetrieve";
// import ChatBoxReceive from "./ChatBoxReceive";
// import { defaultMaxListeners } from "events";

const ChatBoxMain = () => {
  return (
    <div>
      {/* <ChatBoxReceive /> */}
      <ChatBoxSend />
      <ChatBoxRetrieve/>
    </div>
  );
};

export default ChatBoxMain;
