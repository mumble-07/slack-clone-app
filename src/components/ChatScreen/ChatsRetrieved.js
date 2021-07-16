import { useContext, useEffect, useState } from "react";
import "./ChatsRetrieved.css";
import UserContext from "../../api/user-context";
import user1 from "../../assets/user1.png";
import axios from "axios";
import parse from "html-react-parser";

const ChatsRetrieved = () => {
    const { currentMessage, userDetails, chatScreenData, userListHeaders } =  useContext(UserContext);
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    //call retrive message only when receivers change
    useEffect(() => {
        setIsLoading(true)
        retrieveMessage();
    }, [chatScreenData.receivers])

    useEffect(() => {
      setInterval(retrieveMessage, 1000)
      return function cleanup() {
          clearInterval(retrieveMessage);
      }
  }, [])

  const retrieveMessage = () => {
    const storage = JSON.parse(localStorage.getItem("params"));
    const storage2 = JSON.parse(localStorage.getItem("userDetails"));
    localStorage.setItem("params", JSON.stringify(chatScreenData));
    console.log(storage)
    
    if (storage && storage2 && storage.type!=="new") {
      axios
        .get("http://206.189.91.54//api/v1/messages", {
          headers: userListHeaders,
          params: {
            sender_id: storage2.id,
            receiver_class: storage.type,
            receiver_id: storage.receivers[0].id,
          },
        })
        .then((response) => response.data.data)
        .then((result) => {
          currentMessage[0] = result;
          setMessages(currentMessage[0]);
          setIsLoading(false);
        })
        .catch((error) => error);
    }else if (chatScreenData.receivers.length !== 0) {
      axios
        .get("http://206.189.91.54//api/v1/messages", {
          headers: userListHeaders,
          params: {
            sender_id: userDetails[0].id.toString(),
            receiver_class: "User",
            receiver_id: chatScreenData.receivers[0].id,
          },
        })
        .then((response) => response.data.data)
        .then((result) => {
          currentMessage[0] = result;
          setMessages(currentMessage[0]);
          setIsLoading(false);
        })
        .catch((error) => error);
    } else return;
  };


  //call retrive message only when receivers change
  useEffect(() => {
    setIsLoading(true);
    retrieveMessage();
  }, [chatScreenData.receivers]);


    return(
        <div>
            {isLoading && <div className="no-message__alert"><h5>Loading...</h5></div>}

            {!isLoading && 
                (messages?.length > 0 ?
                    <ul className="chat-container">
                        {messages?.map(message => {
                            const messageContent = message.body;
                            const name = message.sender.name ? message.sender.name :  message.sender.email;
                            const time = new Date(message.created_at).toLocaleTimeString();
                            return (
                                <li key={message.id} className="chat-item-container">
                                    <div className="chat__user-image">
                                        <img src={user1} alt="sender image" />
                                    </div>
                                    <div className="chat-item">
                                        <div className="chat-item__header">
                                            <h5>{name}</h5>
                                            <span className="chat-time">{time}</span>
                                        </div>
                                        <div className="chat__content">
                                            {parse(messageContent)}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    :
                    <div className="no-message__alert"><h5>No available message.</h5></div>
                )
            }
        </div>
    )
};

export default ChatsRetrieved;
