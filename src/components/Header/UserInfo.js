import { useState } from 'react';
import "./UserInfo.css";
import UserSettings from "./UserSettings";
import UserProfile from './UserProfile';
import userImage from "../../assets/userImage.jpg";
import userActive from "../../assets/userActive.svg";
import userInactive from "../../assets/userInactive.svg";



const UserInfo = () => {

    const [isDisplaySettings, setDisplaySettings] = useState(false);
    const [isDisplayProfile, setDisplayProfile] = useState(false);
    const [isUserActive, setUserActive] = useState(false);
    
    const displaySettings = () => { 
        setDisplaySettings(prevValue => !prevValue)
    }  
    
    const showProfileHandler = (value) => { setDisplayProfile(value) };
    const isUserActiveHandler = () => { setUserActive(!isUserActive) };

    return(
        <div className="header__user">
            <div className="user__photo" onClick={displaySettings}>
                <img src={userImage} alt="User" className="image-main"/>
                {isUserActive ? 
                    <img src={userActive} alt="User is active" className="active-status" />:
                    <img src={userInactive} alt="User is not active" className="active-status" />
                }
            </div>

            { isDisplaySettings && <UserSettings showProfile={showProfileHandler} displaySettings={displaySettings} isUserActive={isUserActiveHandler}/> }
            { isDisplayProfile && <UserProfile showProfile={showProfileHandler} /> }
        </div>
    )
}


export default UserInfo;