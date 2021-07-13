import "./MainPage.css";
import ChatScreen from "../ChatScreen/ChatScreen";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <Link to="/MainPage" style={{textDecoration: "none", cursor: "default"}} >
      <div className="main-page">
        <div className="main-page-header">
          <Header />
        </div>
        <div className="main-page-sidebar">
          <Sidebar />
        </div>
        <div className="main-page-chat-screen">
          <ChatScreen />
        </div>
      </div>
    </Link>
  );
};

export default Mainpage;