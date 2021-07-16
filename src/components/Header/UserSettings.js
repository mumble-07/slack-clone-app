import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import "./UserSettings.css";
import userImage from "../../assets/userImage.jpg";
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import UserContext from "../../api/user-context";


const UserSettings = (props) => {

    const[isUserActive, setUserActive] = useState(false);
    const {userDetails} = useContext(UserContext);
    const history = useHistory();

    const displayProfileHandler = () => {
        props.showProfile(true);
        props.displaySettings();
    }

    const isUserActiveHandler = () => {
        setUserActive(!isUserActive);
        props.isUserActive();
    }

    const logOutHandler = () => {
        localStorage.clear()
        window.location.replace('/Login')
    }

    const UserSettingsDiv = () => {
        return (
            <div className="user-settings__container">
                <div className="user-status__summary">
                    <div className="user-info">
                        <div className="user__photo image-settings">
                            <img src={userImage} alt="User" />
                        </div>
                        <div className="user__profile">
                            <h4>{userDetails[0].name ? userDetails[0].name : userDetails[0].email}</h4>
                            <span className="user-status">{isUserActive ? 'Active' : 'Away'}</span>
                        </div>
                    </div>

                    <div className="btn update-status"><SentimentSatisfiedOutlinedIcon />Update your status</div>
                </div>
                <div className="btn__user-settings" onClick={isUserActiveHandler}>Set yourself as <strong>{isUserActive ?'away' : 'active'}</strong></div>
                <div className="user-setting__options">
                    <div className="btn__user-settings">Edit profile</div>
                    <div className="btn__user-settings" group="5" onClick={displayProfileHandler}>View Profile</div>
                </div>
                
                <div className="btn__user-settings sign-out" onClick={logOutHandler}>Sign-out</div>
            </div>
        )
    }

    const portalElement = document.getElementById('overlays');

    return (
        <>
            {ReactDOM.createPortal(<UserSettingsDiv/>, portalElement)}
        </>
    )
}

export default UserSettings;