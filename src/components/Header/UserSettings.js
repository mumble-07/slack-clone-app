import { useContext } from "react";
import { UserSettingsContext, UserProfileContext } from "./UserInfoContext"
import "./UserSettings.css";
import userImage from "./userImage.jpg";
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';




const UserSettings = (props) => {
    const [isDisplaySettings, setDisplaySettings] = useContext(UserSettingsContext);
    const [isDisplayProfile, setDisplayProfile] = useContext(UserProfileContext)

    const displayProfileHandler = () => {
        setDisplayProfile(true);
        setDisplaySettings(prevValue => !prevValue)
    }

    return (
        <>
            <div className="user-settings__container">
                <div className="user-status__summary">
                    <div className="user-info">
                        <div className="user__photo">
                            <img src={userImage} alt="User" />
                        </div>
                        <div className="user__profile">
                            <h3>Juan dela Cruz</h3>
                            <span className="user-status">Away</span>
                        </div>
                    </div>

                    <button type="button" className="btn update-status"><SentimentSatisfiedOutlinedIcon />Update your status</button>
                </div>

                <button className="btn__user-settings">Set yourself as <strong>active</strong></button>
                
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