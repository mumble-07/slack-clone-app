import UserContext from '../../api/user-context.js';
import { useContext, useEffect } from 'react';

const ChannelDetails = () => {
    
    const {channelDetails} = useContext(UserContext);

    useEffect(
        () => {
            axios.get('http://206.189.91.54//api/v1/channels/3')
        }

    )

}

export default ChannelDetails;