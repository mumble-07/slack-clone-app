import "./MainPage.css";
import ChatScreen from "../ChatScreen/ChatScreen";
import Header from "../Header/Header";

const Mainpage = () => {
  return (
    <div className="main-page">
      <div className="main-page-header">
        <Header />
      </div>
      <div className="main-page-chat-screen">
        <ChatScreen />
      </div>
    </div>
  );
};

export default Mainpage;
