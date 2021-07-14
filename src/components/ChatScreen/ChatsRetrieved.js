import { useContext, useEffect, useState } from "react";
import "./ChatsRetrieved.css"
import UserContext from "../../api/user-context";
import user1 from "../../assets/user1.png"
import parse from "html-react-parser";


const ChatsRetrieved = () => {
    const { currentMessage } =  useContext(UserContext);
    const [messages] = currentMessage;


    return(
        <div>
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
                })
            } 
            </ul>
        </div>
    )

}

export default ChatsRetrieved;