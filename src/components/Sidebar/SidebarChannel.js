import {useContext} from 'react';
import UserContext from '../../api/user-context.js';

const SidebarChannel = () => {

<<<<<<< HEAD
    const {channelList} = useContext(UserContext);
=======
    const {channelList, chatScreenData} = useContext(UserContext);
    console.log(channelList.length)
>>>>>>> main

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
<<<<<<< HEAD
                    <li><box-icon name='lock-alt'></box-icon> {channel}</li>
=======
                    <li key={channel.id} id={channel.id} name={channel.name} type="Channel" onClick={showChatScreen}><box-icon name='lock-alt' ></box-icon> channel</li>
>>>>>>> main
                    )
                })}
            </>
            )
}

export default SidebarChannel;

