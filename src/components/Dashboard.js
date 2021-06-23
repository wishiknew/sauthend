import { Redirect } from "react-router-dom";
import { useContext } from "react";

import {UserContext} from '../App.js'
export default function Dashboard() {
  const [loggedIn] = useContext(UserContext);
  return (
    loggedIn ? 
    <div className='badge badge-secondary d-flex align-items-center justify-content-center'>
      <h1 >
        Dashboard
      </h1>
    </div> :
    <Redirect to='/login'/>
  )
}