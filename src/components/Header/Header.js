import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HistoryIcon from '@material-ui/icons/History';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import logo from "../../assets/logo.svg";


const Header = () => {


    return (
        <div className="header__container">
            <div className="header">
                <div className="header__menu"><MenuIcon /></div>
                <div className="header__history">
                    <ArrowBackIcon />
                    <ArrowForwardIcon />
                    <HistoryIcon />
                    <div className="header__search">
                        <span>Search</span>
                        <SearchIcon />
                    </div>
                    <HelpOutlineIcon />
                </div>
                <div className="header__user-info">
                    <img src={logo}  alt="logo-pic"/>
                </div>
            </div>
        </div>
    )
}

export default Header;