import {useContext} from 'react';
import UserContext from '../../api/user-context.js';
import classes from './AddChannel.module.css';
import axios from 'axios';
import {Button} from '@material-ui/core';
import Modal from '../UI/Modal';
import {v4} from 'uuid';


const AddUsers = (props) => {
    const {userListHeaders,rawUserList, additionalMembers, chatScreenData} = useContext(UserContext)
    
    const{receivers} = chatScreenData
    console.log(chatScreenData)
    
    const userArrayHandler = (e) => {
        additionalMembers.push(e.target.id)
        console.log(additionalMembers)
    }

    const addUserHandler = () => {
        const formData = {
            id: chatScreenData.receivers[0].id.toString(),
            member_id: additionalMembers.toString(),
        }

        axios.post("http://206.189.91.54//api/v1/channel/add_member",formData, {headers:userListHeaders})
        .then(res => console.log(res))
        .catch(error => console.error())

        additionalMembers.length = 0
    }

    return (
        <Modal onClose={props.onClose}>
                <div className={classes.container}>
                    <Button type="button" className={classes.close} size="large" onClick={props.onClose}>×</Button>
                    <div className={classes.heading}><h2>Add Users to Channel</h2></div>
                    <div className={classes.membersList}>
                            <ul className={classes.membersList__ul}>
                                {rawUserList[0].map(user => {
                                    return (
                                        <li key={v4()} id={user.id} uid={user.uid} onClick={userArrayHandler} className={classes.membersList__li}><box-icon name="user-circle" size="xs"/>{user.uid}</li>
                                    )
                                })}
                            </ul>
                    </div>
                    <div>
                        <button className={classes.createButton} type="submit" onClick={addUserHandler}>Add Users</button>
                    </div>
                </div>
        </Modal>
    )
}

export default AddUsers;