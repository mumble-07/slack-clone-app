import {useState, useContext,useEffect} from "react";
import UserContext from '../../api/user-context.js';
import axios from 'axios';
import "./Sidebar.css";
import 'boxicons';

import SidebarChannel from './SidebarChannel';
import SidebarDM from './SidebarDM';
import { FormatColorTextOutlined } from "@material-ui/icons";

const Sidebar = () => {
    const {chatScreenData} = useContext(UserContext) //modify current receiver when EDIT button is clicked
    const [toggleChannel, setToggleChannel] = useState(false)
    const [toggleDM, setToggleDM] = useState(false)

    const toggleChannelHandler = () => {
        setToggleChannel(prevValue => !prevValue)
    }

    const toggleDMHandler = () => {
        setToggleDM(prevValue => !prevValue)
    }

    const {userListHeaders,channelList, rawUserList} = useContext(UserContext);

    useEffect( () => {
        axios.get('http://206.189.91.54//api/v1/channels', {headers: userListHeaders})
        .then(res => {
            const {data} = res;
            if(data.errors = "No available channels"){ 
                console.log(data.errors);
                return 
            }
            channelList.push(data)
            console.log(channelList)
        })
        .catch(error => console.error('Error fetching data from API'))
        }
        , []
    )

    console.log(rawUserList)

    useEffect( () => {
        axios.get('http://206.189.91.54//api/v1/users', {headers: userListHeaders})
        .then(res => {
            const {data} = res;
            if(data.length == 0){ 
                console.log("No available users");
                return 
            }
            rawUserList.push(data.data)
            console.log(rawUserList)
        })
        .catch(error => console.error('Error fetching data from API'))
        }
        , []
    )

    const setChatScreenData = () => {
        chatScreenData["type"] = "new"
        chatScreenData["receivers"] = [];
    }

    return (
        <div className="wrapper">
        <div className="sidebar">
            <div className="channel-details">
                <div className="channel_name">Group 5</div>
                <box-icon name='edit' onClick={setChatScreenData}></box-icon>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="/#">
                        <box-icon name='message-alt-detail' ></box-icon>
                        <span className="links_name">Threads</span>
                    </a>
                </li>
                <li>
                    <a href="/#">
                        <box-icon name='conversation' ></box-icon>
                        <span className="links_name">All DMs</span>
                    </a>
                </li>
                <li>
                    <a href="/#">
                        <box-icon name='file-blank' ></box-icon>
                        <span className="links_name">Drafts</span>
                    </a>
                </li>
                <li>
                    <a href="/#">
                        <box-icon name='message-alt-error' ></box-icon>
                        <span className="links_name">Mention & reactions</span>
                    </a>
                </li>
                <li>
                    <div className="icon-link">
                    <div className="channelsHandler" onClick={toggleChannelHandler}> 
                        {!toggleChannel && <box-icon name='chevron-right-circle' ></box-icon>}
                        {toggleChannel && <box-icon name ='chevron-down-circle'></box-icon>}
                        <span className="links_name">Channels</span>
                    </div>
                    </div>
                    <ul className="sub-menu">
                        <li><a href="/#"><box-icon name='lock-alt' ></box-icon>batch 9</a></li>
                        {toggleChannel && <SidebarChannel/>}
                        <li><a href="/#"><box-icon name='lock-alt' ></box-icon>Add channels</a></li>
                    </ul>
                </li>
                <li>
                    <div className="icon-link">
                    <div className="dmHandler" onClick={toggleDMHandler}>
                        {!toggleDM && <box-icon name='chevron-right-circle' ></box-icon>}
                        {toggleDM && <box-icon name='chevron-down-circle' ></box-icon>}
                        <span className="links_name">Direct Messages</span>
                    </div>
                    </div>
                    <ul className="sub-menu dm-list">
                        {toggleDM && <SidebarDM className="sidebarDM"/>}
                    </ul>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar;
  