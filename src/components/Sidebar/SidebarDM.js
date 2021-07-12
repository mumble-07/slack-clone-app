import {useContext} from 'react';
import UserContext from '../../api/user-context.js';
import CustomScrollbar from '../../UI/CustomScrollbar';

const SidebarDM = () => {

    const {rawUserList} = useContext(UserContext)
    return (
        <CustomScrollbar>
        {rawUserList[0].map(user => {
            return (
                <li style={{fontSize: '10px'}}><box-icon name='user-circle' ></box-icon> {user.email}</li>
            )
        })
        }    
        </CustomScrollbar>
    )
}

export default SidebarDM;