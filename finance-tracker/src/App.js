import { BrowserRouter,
          Switch,
      Route,Redirect} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

//pages & components
import Home from './pages/home/Home';      
import Login from   './pages/login/Login';      
import SignUp from './pages/signup/SignUp';
import NavBar from './components/NavBar'

function App() {
  const {authIsReady,user}=useAuthContext()
  
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && user.displayName && <Redirect to="/" />}
              {!user && <SignUp />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
