import { useContext, useState, useEffect } from 'react';
import "./UserProfile.css";
import CloseIcon from '@material-ui/icons/Close';
import userImage from "../../assets/userImage.jpg";
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import UserContext from '../../api/user-context';


const UserProfile = (props) => {

    const {userDetails} = useContext(UserContext);
    const userName = userDetails[0].name? userDetails[0].name : userDetails[0].email;
    const displayName = userDetails[0].name? userDetails[0].name : userDetails[0].email;
    const userEmail = userDetails[0].email;
    
    const initialTime = new Date().toLocaleTimeString();
    const [localTime, setLocalTime] = useState(initialTime);
    
    
    useEffect(() => {
        var timerID = setInterval(() => setLocalTime(new Date().toLocaleTimeString()), 1000 );
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    const displayProfileHandler = () => {
        props.showProfile(false)
    }


    return (
        <div className="user-profile">
            <h2>Profile</h2>
            <CloseIcon className="close-icon" onClick={displayProfileHandler} />
            <div className="user-profile__content">
                <div className="user__photo profile-view">
                    <img src={userImage} alt="User" />
                </div>
                <h2>{userName}</h2>
                <div className="options">
                    <div className="options-item">
                        <SentimentSatisfiedOutlinedIcon />
                        <span>Set Status</span>
                    </div>
                    <div className="options-item">
                        <EditOutlinedIcon />
                        <span>Edit profile</span>
                    </div>
                </div>
                <div className="details">
                    <div>
                        <span>Display name</span>
                        <h3>{displayName}</h3>
                    </div>
                    <div>
                        <span>Local time</span>
                        <h3>{localTime}</h3>
                    </div>
                    <div>
                        <span>Email address</span>
                        <h3>{userEmail}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;