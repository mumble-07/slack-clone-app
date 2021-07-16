import UserContext from '../../api/user-context.js';
import { useContext, useEffect } from 'react';
import axios from 'axios';

const ChannelDetails = () => {
    
    const {channelDetails,userListHeaders} = useContext(UserContext);
    useEffect(
        () => {
            axios.get('http://206.189.91.54//api/v1/channels/3', {headers: userListHeaders})
            .then(res => console.log(res))
            .catch(error => console.error)
        }, []
    )

    return ( <> </>)
}

export default ChannelDetails;