import "./ChatScreenBody.css";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import CustomScrollbar from "../UI/CustomScrollbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import MessageContainer from "../UI/MessageContainer";

const ChatScreenBody = () => {
  return (
    <CustomScrollbar>
      <div className="chat-screen-body">
        <div className="user-chat-body">
          {/* <div className="user-chat">
            <img src={user1} />
            <h1>User Name</h1>
          </div>
          <div className="user-chat">
            <img src={user2} />
            <h1>User Name</h1>
          </div> */}
          <Router>
            <Switch>
              <Route
                path="/MainPage/MessageContainer"
                component={MessageContainer}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </CustomScrollbar>
  );
};

export default ChatScreenBody;
