import { ContactlessOutlined } from '@material-ui/icons';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../api/user-context.js';
import CustomScrollbar from '../UI/CustomScrollbar';

const SidebarDM = () => {

<<<<<<< HEAD
    const history = useHistory()
    const {rawUserList} = useContext(UserContext)
    
    const messagePaneHandler = () => {
        history.push('/MainPage/MessageContainer')
=======
    const {rawUserList, chatScreenData} = useContext(UserContext);

    const showChatScreen = (e) => {
        chatScreenData.type = e.currentTarget.type;
        chatScreenData.receivers = [{ 
            id: e.currentTarget.id,
            name: e.currentTarget.getAttribute("name"),
            type: e.currentTarget.type,
        }]
        console.log(chatScreenData)
        // console.log()
>>>>>>> main
    }

    return (
        <CustomScrollbar>
        {rawUserList[0].map(user => {
            const userName = user.name ? user.name : user.email
            return (
<<<<<<< HEAD
                <li style={{fontSize: '10px'}} key={user.id} id={user.id} onClick={messagePaneHandler}><box-icon name='user-circle' ></box-icon> {user.email}</li>
=======
                <li key={user.id} id={user.id} name={userName} type="User" onClick={showChatScreen} ><a href="/#"><box-icon name='user-circle' ></box-icon> {user.email} </a></li>
>>>>>>> main
            )
        })
        }    
        </CustomScrollbar>
    )
}

export default SidebarDM;