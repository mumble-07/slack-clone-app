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


    useEffect(() => {
      setInterval(retrieveMessage, 1000)
      return function cleanup() {
          clearInterval(retrieveMessage);
      }
  }, [])

  const retrieveMessage = () => {

    const storage = JSON.parse(localStorage.getItem("params"));
    const storage2 = JSON.parse(localStorage.getItem("userDetails"));
    
    let senderID, receiverClass, receiverID;

    if (storage && storage2) { //if local storage has values, use saved values and assign to senderID, receiverClass, receiverID
      senderID = storage2[0].id;
      receiverClass = storage.receivers[0]?.type
      receiverID = storage.receivers[0].id
    } 
    else { //use the values from any selected user(receiver)/channel
      senderID = storage2[0].id;
      receiverClass = chatScreenData.receivers[0]?.type
      receiverID = chatScreenData.receivers[0]?.id;
    }

    if (chatScreenData.receivers.length !== 0) { //retrieve messages when chatScreenData has value for receivers
      axios
      .get("http://206.189.91.54//api/v1/messages", {
        headers: userListHeaders,
        params: {
          sender_id: senderID,
          receiver_class: receiverClass,
          receiver_id: receiverID,
        },
      })
      .then((response) => response.data.data)
      .then((result) => {
        currentMessage[0] = result;
        console.log(currentMessage[0]);
        setMessages(currentMessage[0]);
        setIsLoading(false);
      })
      .catch((error) => error);
    };
  }


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
