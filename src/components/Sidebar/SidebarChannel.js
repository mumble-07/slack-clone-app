import {useContext} from 'react';
import UserContext from '../../api/user-context.js';

const SidebarChannel = () => {

    const {channelList, chatScreenData} = useContext(UserContext);
    console.log(channelList.length)

        if(channelList.length == 0){
            return (<></>)
        }

        const showChatScreen = (e) => {
            chatScreenData.type = e.currentTarget.type;
            chatScreenData.receivers = [{ 
                id: e.currentTarget.id,
                name: e.currentTarget.getAttribute("name"),
                type: e.currentTarget.type,
            }]
            console.log(chatScreenData)
        }
        
        return(
            <>    
            {channelList.map(channel => {
                return (
                    <li key={channel.id} id={channel.id} name={channel.name} type="Channel" onClick={showChatScreen}><box-icon name='lock-alt' ></box-icon> channel</li>
                    )
                })}
            </>
            )
}

export default SidebarChannel;

