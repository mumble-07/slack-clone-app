import "./ChatScreenBody.css";
import CustomScrollbar from "../UI/CustomScrollbar";

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import MessageContainer from '../UI/MessageContainer';
import ChatsRetrieved from "./ChatsRetrieved";

const ChatScreenBody = () => {
  return (
    <CustomScrollbar>
      <div className="chat-screen-body">
        <div className="user-chat-body">
          <ChatsRetrieved />
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
