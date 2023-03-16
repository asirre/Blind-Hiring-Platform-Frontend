import React, { useState } from 'react';
import { CForm, CCol, CFormInput, CButton, CFormCheck, CFormFeedback } from "@coreui/react";
import UserPool from './UserPool';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [password2, SetPassword2] = useState("");
  const [validated, setValidated] = useState(false);


  const onSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    setValidated(true);

    if (form.checkValidity() === true && password === password2) 
    {
      UserPool.signUp(email, password, [], null, (err, data) => {
        
        if (err) {
          console.error(err);
          //oops, there was a problem with given credentials (either user exists or passwords not good enough)
        }
        else
        {
          console.log(data);
          //signup is done, redirect to homepage
        }
      });
    }
  };


  return(
    <div>

        <CForm id="signUpForm"     
          noValidate
          validated={validated} 
          onSubmit={onSubmit}>

          <CCol md={4}>
            <CFormInput
              type="email"
              value = {email}
              label="Email"
              onChange = {(event) => setEmail(event.target.value)}
              required
            />
          </CCol>

          <CCol md={4}>
            <CFormInput
              type="password"
              value = {password}
              label="Password"
              onChange = {(event) => SetPassword(event.target.value)}
              required
            />
          </CCol>

          <CCol md={4}>
            <CFormInput
              type="password"
              value = {password2}
              label="Confirm Password"
              onChange = {(event) => SetPassword2(event.target.value)}
              required
            />
          </CCol>

          <CCol xs={12}>
            <CFormCheck
              type="checkbox"
              id="invalidCheck"
              label="I have read and I agree to the terms and conditions."
              required
            />
            <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
          </CCol>
          
          <CCol xs={12}>
            <CButton color="primary" type="submit">
              Sign up
            </CButton>
          </CCol>

        </CForm>
    </div>
  );
}

export default Signup;