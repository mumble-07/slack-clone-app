import {useContext} from 'react';
import UserContext from '../../api/user-context.js';
import {v4} from 'uuid';

const SidebarChannel = () => {

    const {channelList, chatScreenData} = useContext(UserContext);

    const showChatScreen = (e) => {
        chatScreenData.type = e.currentTarget.type;
        chatScreenData.receivers = [{ 
            id: e.currentTarget.id,
            name: e.currentTarget.getAttribute("name"),
            type: e.currentTarget.type,
        }]
        localStorage.setItem("params", JSON.stringify(chatScreenData));
    }
        
        return(
            <>
            {channelList[0].errors ? <></> : channelList[0].data.map(channel => {
                return (
                    <li key={v4()} id={channel.id} name={channel.name} type="Channel" onClick={showChatScreen}><box-icon name='lock-alt' ></box-icon> {channel.name}</li>
                    )
                })}
            </>
        )
}

export default SidebarChannel;
