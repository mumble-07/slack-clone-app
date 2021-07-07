import classes from './Login.module.css';
import { FiGlobe } from 'react-icons/fi';
import {VscChevronDown} from 'react-icons/vsc'

const LoginFooter = () => {
    return(
    <div className={classes.pageFooter}>
        <div className={classes.pageFooterChild}>
            <span className={classes.pageFooterItems}><a href="/">Privacy & Terms</a></span>
            <span className={classes.pageFooterItems}><a href="/"> Contact us </a></span>
            <span className={classes.pageFooterItems}><a href="/"> 
                <FiGlobe/> 
                <span className={classes.regionLabel}>Change region </span> 
                <VscChevronDown/></a> 
            </span>
        </div>
    </div>
    )
}

export default LoginFooter;