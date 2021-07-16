import './App.css';
import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserProvider from './api/user-provider.js';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MainPage from './components/MainPage/MainPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data){
      setIsLoggedIn(true);
      }
  }, [])

  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            {!isLoggedIn && <Route path='/' exact component={Login}/>}
            {isLoggedIn && <Route path='/' exact component={MainPage}/>}
            <Route path='/Login' exact component={Login}/>
            <Route path='/MainPage' component={MainPage}/>
            <Route path='/Signup' component={Signup}/>
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;