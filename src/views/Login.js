import React, { useState, useContext } from 'react';
import { CForm, CCol, CFormInput, CButton } from "@coreui/react";
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
        <h1>Log In</h1>
        <CForm id="logInForm" onSubmit={onSubmit}>
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
          
          <CCol xs={12}>
            <CButton color="primary" type="submit">
              Log in
            </CButton>
          </CCol>

        </CForm>
    </div>
  );
}

export default Login;