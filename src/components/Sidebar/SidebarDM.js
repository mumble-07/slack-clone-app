import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../api/user-context.js';
import CustomScrollbar from '../UI/CustomScrollbar';

const SidebarDM = () => {

    const history = useHistory()
    const {rawUserList} = useContext(UserContext)
    
    const messagePaneHandler = () => {
        history.push('/MainPage/MessageContainer')
    }

    return (
        <CustomScrollbar>
        {rawUserList[0].map(user => {
            return (
                <li style={{fontSize: '10px'}} key={user.id} id={user.id} onClick={messagePaneHandler}><box-icon name='user-circle' ></box-icon> {user.email}</li>
            )
        })
        }    
        </CustomScrollbar>
    )
}

export default SidebarDM;