import {useContext} from 'react';
import UserContext from '../../api/user-context.js';

const SidebarDM = () => {

    const {rawUserList} = useContext(UserContext)
    return (
        <>
        {rawUserList[0].map(user => {
            return (
                <li><a href="/#"><box-icon name='user-circle' ></box-icon> {user.email} </a></li>
            )
        })
        }    
        </>
    )
}

export default SidebarDM;