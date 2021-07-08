import {Link} from 'react-router-dom';
import classes from './Login.module.css';


const LoginHeader =() => {
    return (
        <>
            <div className={classes.pageHeader}>
                <div className="left-col">

                </div>
                <div className={classes.centerCol} style={{display: 'flex', justifyContent: 'center'}}>
                        <img alt="Slack" src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height="34" title="Slack"/>
                </div>
                <div className={classes.rightCol}>
                    <div>
                        New to Slack? <br></br>
                        <Link to="/Signup">
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginHeader;