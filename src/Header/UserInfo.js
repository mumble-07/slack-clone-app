import { useState } from 'react';
import { UserSettingsContext, UserProfileContext } from "./UserInfoContext"
import "./UserInfo.css";
import UserSettings from "./UserSettings";
import UserProfile from './UserProfile';
import userImage from "./userImage.jpg";



const UserInfo = () => {

    const [isDisplaySettings, setDisplaySettings] = useState(false);
    const [isDisplayProfile, setDisplayProfile] = useState(false)
    
    const displaySettings = () => { 
        setDisplaySettings(prevValue => !prevValue)
    }  
    
    return(
        <UserSettingsContext.Provider value={[isDisplaySettings, setDisplaySettings]}>
            <UserProfileContext.Provider value={[isDisplayProfile, setDisplayProfile]} >
                <div className="header__user">
                    <div className="user__photo" onClick={displaySettings}>
                        <img src={userImage} alt="User" />
                    </div>
                    { isDisplaySettings && <UserSettings /> }
                    { isDisplayProfile && <UserProfile /> }
                </div>
            </UserProfileContext.Provider>
        </UserSettingsContext.Provider>
    )
}


export default UserInfo;