import React, { useState } from 'react';
import { CForm, CCol, CFormInput, CButton, CFormCheck, CFormFeedback, CRow, CCard } from "@coreui/react";
import UserPool from './UserPool';
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [password2, SetPassword2] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();


  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    setValidated(true);

    if (form.checkValidity() === true && password === password2) 
    {
      await UserPool.signUp(email, password, [], null, (err, data) => {
        
        if (err) {
          console.error(err);
          alert(err.message);
        }
        else
        {
          console.log(data);
          navigate('/login');
        }
      });
    }
    else if (password !== password2)
    {
      alert("Passwords do not match!");
    }
  };


  return(
    <div>
        <Navbar isLoggedIn={false} />
        <CCol
          style={{
            backgroundColor: `#9DDAF6`,
            backgroundSize: "100% 100%"
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
              fontSize: "2vw",
              marginTop: "3vw",
              marginBottom: "3vw"
            }}
            
          >
        <CForm id="signUpForm"     
          noValidate
          validated={validated} 
          onSubmit={onSubmit}
          className="text-center">
            <h1>Sign Up</h1>
          <CCol>
            <CFormInput
              className="text-center" 
              type="email"
              value = {email}
              label="Email"
              onChange = {(event) => setEmail(event.target.value)}
              required
            />
          </CCol>

          <CCol>
            <CFormInput
              className="text-center"
              type="password"
              value = {password}
              label="Password"
              onChange = {(event) => SetPassword(event.target.value)}
              required
            />
          </CCol>

          <CCol>
            <CFormInput
              className="text-center"
              type="password"
              value = {password2}
              label="Confirm Password"
              onChange = {(event) => SetPassword2(event.target.value)}
              required
            />
          </CCol>

          <CCol style={{fontSize:"1.5vw"}}>
            <CFormCheck
              // style={{fontSize:"1vw"}}
              className="text-center"
              type="checkbox"
              id="invalidCheck"
              label="I have read and I agree to the terms and conditions."
              required
            />
            <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
          </CCol>
          
          <CCol>
            <CButton className="text-center" color="primary" type="submit">
              Sign up
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

export default Signup;