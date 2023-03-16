import React, { useState } from 'react';
import UserPool from './UserPool';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [password2, SetPassword2] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();

    if (password == password2)
    {
      UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log(data);
      })
    }
  };


  return(
    <div>
      <section className='sign-up-form-wrap'>
              <h1>Sign Up</h1>
              <form id="signUpForm" onSubmit={onSubmit}>
                <div>
                  <input placeholder='Email' type='email' value = {email} onChange = {(event) => setEmail(event.target.value)}/>
                </div>
                <div>
                  <input placeholder='Password' type='password' value = {password} onChange = {(event) => SetPassword(event.target.value)}/>
                </div>
                <div>
                  <input placeholder='Confirm Password' type='password' value = {password2} onChange = {(event) => SetPassword2(event.target.value)}/>
                </div>
                <input type="submit" value="Sign up"/>
              </form>
      </section>
    </div>
  );
}

export default Signup;