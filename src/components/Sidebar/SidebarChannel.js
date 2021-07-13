import {useContext} from 'react';
import UserContext from '../../api/user-context.js';

const SidebarChannel = () => {

    const {channelList} = useContext(UserContext);

        if(channelList.length == 0){
            return (<></>)
        }
        
        return(
            <>    
            {channelList.map(channel => {
                return (
                    <li><box-icon name='lock-alt'></box-icon> {channel}</li>
                    )
                })}
            </>
            )
}

export default SidebarChannel;

