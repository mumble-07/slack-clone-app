import SignupHeader from './SignupHeader';
import SignupBody from './SignupBody';
import LoginFooter from '../Login/LoginFooter';
import {Link} from 'react-router-dom';


const Signup = () => {
    return (
        <>
            <SignupHeader/>
            <SignupBody/>
            <LoginFooter/>
        </>
    )
}

export default Signup;