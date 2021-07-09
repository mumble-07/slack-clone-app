import {useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../api/user-context.js';

import axios from 'axios';
import classes from './Login.module.css';
import { FcGoogle } from "react-icons/fc";
import {DiApple} from "react-icons/di";
import {WiStars} from "react-icons/wi";

const initialState = {
    email: '',
    password: '',
}

const LoginBody = () => {
    const [formData,setFormData] = useState(initialState)
    const {userDetails,setUpHeaders, userListHeaders}  = useContext(UserContext)
    const history = useHistory();


    const loginUser = () => {
        const oldUser = {email: formData.email, password: formData.password}
        axios.post('http://206.189.91.54//api/v1/auth/sign_in', oldUser)
        .then(res => {
            const {data} = res.data;
            const {"access-token":accessToken,client,expiry,uid} = res.headers;
            userDetails.push(data);
            console.log(data)
            setUpHeaders(accessToken,client,expiry,uid);
            history.push('/MainPage');
        })
        .catch(error => console.error('Error fetching data from API'));
    }

    return(
        <>
            <div className={classes.pageBody}>
                <h2 className="heading">Sign in to Slack</h2>
                <div className={classes.subHeading}>
                    We suggest using the 
                    <strong> email address you use at work.</strong>
                </div>
                <div className={classes.pageSignIn}>
                    <div className={classes.pageButtons}>
                        <button className={classes.googleLogin}> <FcGoogle size={20} style={{marginRight: '15px'}}/> Sign In with Google </button>
                        <button className={classes.appleLogin}> <DiApple size={20} style={{marginRight: '15px'}}/> Sign In with Apple </button>
                    </div>
                    <div className={classes.horizontalContentRule}>
                        <hr className={classes.leftLine}></hr>
                        <div className={classes.centerLine}>OR</div>
                        <hr className={classes.rightLine}></hr>
                    </div>
                    <div className={classes.customLogin}>
                            <input type="email" placeholder="name@work-email.com" onChange={(e)=> setFormData({...formData,email:e.target.value})}/>
                            <input type="password" placeholder="password" onChange={(e)=> setFormData({...formData,password:e.target.value})}/>
                            <button onClick={loginUser}> Sign In with Email</button>
                        <div className={classes.instructions}><WiStars size={70} className={classes.instructionIcon}/><span>We'll email you a magic code for a password free sign-in. Or you can <a href="/">sign in manually.</a></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginBody;