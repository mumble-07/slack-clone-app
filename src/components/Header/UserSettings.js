import { useState } from "react";
import "./UserSettings.css";
import userImage from "../../assets/userImage.jpg";
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';




const UserSettings = (props) => {

    const[isUserActive, setUserActive] = useState(false)


    const displayProfileHandler = () => {
        props.showProfile(true);
        props.displaySettings();
    }

    const isUserActiveHandler = () => {
        setUserActive(!isUserActive);
        props.isUserActive();
    }

    return (
        <>
            <div className="user-settings__container">
                <div className="user-status__summary">
                    <div className="user-info">
                        <div className="user__photo image-settings">
                            <img src={userImage} alt="User" />
                        </div>
                        <div className="user__profile">
                            <h4>Juan dela Cruz</h4>
                            <span className="user-status">{isUserActive ? 'Active' : 'Away'}</span>
                        </div>
                    </div>

                    <button type="button" className="btn update-status"><SentimentSatisfiedOutlinedIcon />Update your status</button>
                </div>

                <button className="btn__user-settings" onClick={isUserActiveHandler}>Set yourself as <strong>{isUserActive ?'away' : 'active'}</strong></button>
                
                <div className="user-setting__options">
                    <button className="btn__user-settings">Edit profile</button>
                    <button className="btn__user-settings" onClick={displayProfileHandler}>View Profile</button>
                </div>
                
                <button type="button" className="btn__user-settings sign-out">Sign-out</button>
            </div>

        </>
    )
}

export default UserSettings;