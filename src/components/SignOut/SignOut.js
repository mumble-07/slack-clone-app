import classes from './SignOut.module.css';
import {Link} from 'react-router-dom';

const SignOut = () => {

    return (
    <Link to='/SignOut' style={{textDecoration: 'none', cursor: 'default'}}>
        <div className={classes.mainPage}>
            <div className={classes.header}>
                <div className={classes.logo}></div>
                <div className={classes.logo}></div>
            </div>
            <div className={classes.body}>
                test
            </div>
            <div className={classes.footer}>
                
            </div>
        </div>
    </Link>
    )
}

export default SignOut;