import {Link} from 'react-router-dom';
import classes from './Signup.module.css';

const SignupHeader = () => {
    return(
        <div className={classes.pageHeader}>
            <div className={classes.leftCol}></div>
            <div className={classes.centerCol} style={{display: 'flex', justifyContent: 'center'}}>
                <Link to='/'>
                    <img alt="Slack" src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height="34" title="Slack"/>
                </Link>
            </div>
            <div className={classes.rightCol}>
                    
            </div>
        </div>
    )
}

export default SignupHeader;