import React, { useState, useContext } from 'react';
import { AccountContext } from '../Account';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email,password)
    .then(data => {
        console.log("Logged In!", data);
    })
    .catch(err => {
        console.log("Error: ", err);
    })
  };


  return(
    <div>
      <section className='log-in-form-wrap'>
              <h1>Log In</h1>
              <form id="logInForm" onSubmit={onSubmit}>
                <div>
                  <input placeholder='Email' type='email' value = {email} onChange = {(event) => setEmail(event.target.value)}/>
                </div>
                <div>
                  <input placeholder='Password' type='password' value = {password} onChange = {(event) => SetPassword(event.target.value)}/>
                </div>
                <input type="submit" value="Log In"/>
              </form>
      </section>
    </div>
  );
}

export default Login;