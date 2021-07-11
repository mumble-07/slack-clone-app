import {createContext} from 'react';

const UserContext = createContext({
    userDetails: [],
    userListHeaders: {
        'access-token': '',
        client: '',
        expiry: '',
        uid: '',
    },
    rawUserList: [],
    channelList: [],
    dmList: [],
    chatScreenData: {
        type: "channel",
        receivers: ["batch9"],
    },
})


export default UserContext;