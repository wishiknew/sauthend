import { useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../App";
export default function Register({setLoggedIn}) {

  let history = useHistory();
  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(() => true);
    history.push('/dashboard');
    

  }

  return (
    <div>
       <div className='badge badge-secondary d-flex  align-items-center justify-content-center'>
      <h1 >
        Register
      </h1>
    </div>
      <form className='p-2 align-items-center flex-column align-items-center justify-content-center' onSubmit={onFormSubmit}>
        <div className="form-group ">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputName1">Name</label>
            <input type="text" className="form-control" id="exampleInputName1" placeholder="Name Please"/>
  </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
              <button type="submit" className="btn btn-primary">Submit</button>
</form>
          </div>
          )
}