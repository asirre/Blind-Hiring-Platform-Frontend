import React, { useState, useContext } from 'react';
import { CForm, CCol, CFormInput, CButton, CCard } from "@coreui/react";
import { AccountContext } from '../Account';
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar";

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
      <Navbar isLoggedIn={false} />
      <CCol
          style={{
            backgroundColor: `#9DDAF6`,
            backgroundSize: "100% 100%",
            height: "65vh",
          }}
        >
        <CCard className="text-center"
            style={{
              color: "white",
              position: "absolute",
              width: "30vw",
              background: "transparent",
              border: "none",
              marginTop: "5vh",
              marginLeft: "25vw",
              marginRight: "25vw",
              fontSize: "2vw",
            }}
          >
          <h1>Log In</h1>

          <CForm id="logInForm" onSubmit={onSubmit}>
          <CCol>
              <CFormInput
                type="email"
                value = {email}
                label="Email"
                onChange = {(event) => setEmail(event.target.value)}
                required
              />
            </CCol>

            <CCol>
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
        </CCard>
        </CCol>

    <BottomInfo />

    </div>
  );
}

export default Login;