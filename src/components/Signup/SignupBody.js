import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../api/user-context.js';
import axios from 'axios';
import classes from './Signup.module.css';

const initialState = {
    email: '',
    password: '',
    password_confirmation: '',
}

const SignupBody = () => {
    const [formData,setFormData] = useState(initialState)
    const {userDetails} = useContext(UserContext)

    const history = useHistory();
    
    const loginUser = () => {
            const newUser = {email: formData.email, password: formData.password, password_confirmation: formData.password_confirmation}
            axios.post('http://206.189.91.54//api/v1/auth/', newUser)
            .then(res => {
                const {data} = res.data;
                userDetails.push(data);
                history.push('/Header')
            })
            .catch(error => console.error('Error fetching data from API'));
    }

    
    return(
        <div className={classes.pageBody}>
                <h2 className={classes.heading}>First, enter your email</h2>
                <div className={classes.subHeading}>
                    We suggest using the 
                    <strong> email address you use at work.</strong>
                </div>
                <div className={classes.pageSignIn}>
                    <div className={classes.customLogin}>
                        <input type="email" placeholder="name@work-email.com" onChange={(e)=> setFormData({...formData, email:e.target.value})}/>
                        <input type="password" placeholder="Enter password" onChange={(e)=> setFormData({...formData,password:e.target.value})}/>
                        <input type="password" placeholder="Confirm password" onChange={(e)=> setFormData({...formData,password_confirmation:e.target.value})}/>
                        <button onClick={loginUser}> Continue</button>
                        <div className={classes.instructions}>
                            <span className={classes.emailNotifs}> <input type="checkbox" name="emailnotifs" id="emailnotifs"/> <label htmlFor="emailnotifs">Its okay to send me emails about Slack.</label></span>
                            <span className={classes.terms}>By continuing, you’re agreeing to our 
                                <a href="/#"> Customer Terms of Service,</a> 
                                <a href="/#"> Privacy Policy,</a>
                                <a href="/#"> Cookie Policy.</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SignupBody;