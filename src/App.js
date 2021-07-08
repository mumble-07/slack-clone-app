import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserProvider from './api/user-provider.js';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup'

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/Signup' component={Signup}/>
            <Route path='/Header' component={Header}/>
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;