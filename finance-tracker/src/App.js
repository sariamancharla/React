import { BrowserRouter as Router,
          Switch,
      Route} from 'react-router-dom'

//pages & components
import Home from './pages/home/Home';      
import Login from   './pages/login/Login';      
import SignUp from './pages/signup/SignUp';
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><SignUp /></Route>
        </Switch>
    </Router>
  );
}

export default App
