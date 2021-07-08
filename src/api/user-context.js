import {createContext} from 'react';

const UserContext = createContext({
    userDetails: [],
    userListHeaders: {
        'access-token': '',
        client: '',
        expiry: '',
        uid: '',
    },
    userList: [],
})


export default UserContext;