import React, { useState, useContext } from 'react';
import { CForm, CCol, CFormInput, CButton, CCard, CRow } from "@coreui/react";
import { AccountContext } from '../Account';
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const { authenticate } = useContext(AccountContext);
  const navigate = useNavigate();


  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email,password)
    .then(data => {
        console.log("Logged In!", data);
        navigate('/login');

    })
    .catch(err => {
        console.log("Error: ", err);
        alert(err.message);
    })
  };


  return(
    <div>
      <Navbar isLoggedIn={false} />
      <CCol
          style={{
            backgroundColor: `#9DDAF6`,
            backgroundSize: "100% 100%",
            height: "65vh"
          }}
        >
          <CRow className="justify-content-center">
        <CCard className="text-center"
            style={{
              color: "white",
              position: "relative",
              background: "transparent",
              border: "none",
              width:"30vw",
              fontSize: "2vw"
            }}
            
          >
          <CForm 
          id="logInForm" 
          onSubmit={onSubmit}
          className="text-center"
          style={{marginTop: "5vw"}}>
          <h1>Log In</h1>
          <CCol xs="auto">
              <CFormInput
                className="text-center"
                type="email"
                value = {email}
                label="Email"
                onChange = {(event) => setEmail(event.target.value)}
                required
              />
            </CCol>

            <CCol xs="auto">
              <CFormInput
                className="text-center"
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
        </CCard>
        </CRow>
        </CCol>

    <BottomInfo />

    </div>
  );
}

export default Login;