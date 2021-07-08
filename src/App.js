import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/Signup' component={Signup}/>
          <Route path='/Header' component={Header}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
