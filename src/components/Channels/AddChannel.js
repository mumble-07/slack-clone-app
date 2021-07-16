import {useContext, useEffect, useState} from 'react';
import {TextField, InputAdornment, Button} from '@material-ui/core';
import UserContext from '../../api/user-context.js'
import Modal from '../UI/Modal';
import {v4} from 'uuid';
import classes from './AddChannel.module.css';
import 'boxicons';
import axios from 'axios';

const initialState = {
    name: '',
    "user-ids": [],
}

const AddChannel = (props) => {
    const [formData,setFormData] = useState(initialState)
    const {rawUserList, userListHeaders,closeModals, channelDetails} = useContext(UserContext);
    
    const addMembersHandler = (e) => {
        formData["user-ids"].push(Number(e.target.id))
    }

    const addChannelHander = (e) => {
        axios.post('http://206.189.91.54//api/v1/channels', formData,{headers: userListHeaders})
        .then(res => {
            channelDetails.push(res)
        })
        .catch(error => console.error(error.response.data))
    }

    const closeModalHandler = () => {    
        props.onClose()
    }

    return (
        <>
        <Modal onClose={props.onClose}>
                <div className={classes.container}>
                    <Button type="button" className={classes.close} size="large" onClick={closeModalHandler}>×</Button>
                    <div className={classes.heading}><h2>Create Channel</h2></div>
                    <div className={classes.subHeading}>Channels are where your team communicates. 
                        They're best when organized around a topic - #programming for example.
                    </div>
                    <div>
                            <TextField
                                label="Channel Name"
                                id="channelName"
                                placeholder="e.g. scammers"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">#</InputAdornment>,
                                }}
                                variant="outlined"
                                style={{width:'100%'}}
                                onChange={e=>setFormData({...formData, name: e.target.value})}
                            />
                    </div>
                    <div>
                            <TextField
                                label="Description (optional)"
                                id="channelDescription"
                                variant="standard"
                                style={{width:'100%'}}
                            />
                    </div>
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
                        <button className={classes.createButton} type="submit" onClick={addChannelHander}>Create</button>
                    </div>
                </div>
        </Modal>
        </>
    )
}

export default AddChannel;