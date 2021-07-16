import {useContext} from 'react';
import UserContext from '../../api/user-context.js';
import classes from './AddChannel.module.css';

const AddUsers = () => {
    const {userListHeaders} = useContext(UserContext)
    const addUserHandler = () => {
        axios.post("http://206.189.91.54//api/v1/channel/add_member",{headers:userListHeaders})
        .then(res => console.log(res.data))
        .cath(error => console.error())
    }

    return (
        <Modal>
                <div className={classes.container}>
                    <Button type="button" className={classes.close} size="large" onClick={closeModals}>×</Button>
                    <div className={classes.heading}><h2>Add Users to Channel</h2></div>
                    <div className={classes.membersList}>
                            <ul className={classes.membersList__ul}>
                                {rawUserList[0].map(user => {
                                    return (
                                        <li key={v4()} id={user.id} uid={user.uid} onClick={addMembersHandler} className={classes.membersList__li}><box-icon name="user-circle" size="xs"/>{user.uid}</li>
                                    )
                                })}
                            </ul>
                    </div>
                    <div>
                        <button className={classes.createButton} type="submit" onClick={addChannelHander}>Add Users</button>
                    </div>
                </div>
        </Modal>
    )
}

export default AddUsers;