import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserProvider from './api/user-provider.js';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import MainPage from './components/MainPage/MainPage';
// import UsersList from './components/AddUsers/UsersList';
function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/Signup' component={Signup}/>
            <Route path='/MainPage' component={MainPage}/>
          </Switch>
        </Router>
        {/* <UsersList/> */}
      </UserProvider>
    </>
  );
}

export default App;