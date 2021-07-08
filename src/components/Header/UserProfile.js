import { useContext } from "react";
import { UserProfileContext } from "./UserInfoContext"
import "./UserProfile.css";
import CloseIcon from '@material-ui/icons/Close';
import userImage from "./userImage.jpg";
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const UserProfile = () => {
    const userName = "Juan dela Cruz";
    const displayName = "Juan dela Cruz";
    const userEmail = "juan@gmail.com";

    const [displayProfile, setDisplayProfile] = useContext(UserProfileContext)
    const displayProfileHandler = () => {
        setDisplayProfile(displayProfile => !displayProfile);
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
                        <h3>{displayName}</h3>
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