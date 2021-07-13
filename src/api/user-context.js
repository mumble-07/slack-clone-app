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
        type: "Channel",
        receivers: [{id: "", name: "batch9", type: "Channel"}],
    },
})


export default UserContext;