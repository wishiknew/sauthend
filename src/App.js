import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';

export const UserContext = React.createContext([]);
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  let history = useHistory([]);
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <div>
          <nav className='d-flex p-2 bg-dark'>
            <ul>
              <li>
                {loggedIn && <Link >Dashboard</Link>}
              </li>
              {!loggedIn && <li>
                <Link to="/login">Login</Link>
              </li>}
              <li>
                <Link to="/register">Register</Link>
              </li>

            </ul>
            <ul className='d-flex flex-row-reverse'>
              {loggedIn && <li>
                <li className='btn btn-danger' onClick={() => history.push('/login')}>
                  Logout
                </li>
              </li>}
            </ul>
          </nav>


          <Switch>
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/logout">
              <Redirect to="/" />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Redirect to='/login' />
            </Route>
          </Switch>
        </div>
      </Router>

    </UserContext.Provider>

  );
}