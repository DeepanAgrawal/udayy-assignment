import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/home/homeScreen';
import LoginScreen from './screens/login/loginScreen';

function App() {
  return (
     <Router>
       <Switch>
          <Route exact path = "/" component = {LoginScreen} key="login"/>
          <Route path = "/home" component = {HomeScreen} key="home"/>
          </Switch>
      </Router>
    
  );
}

export default App;
