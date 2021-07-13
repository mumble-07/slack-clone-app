import {Link} from 'react-router-dom';

const MessageContainer = () => {

    return (
        <Link to="/MessageContainer" style={{textDecoration: "none", cursor:"default"}}>
            <div>
                Insert User Message Here. 
            </div>
        </Link>
    )
}

export default MessageContainer;