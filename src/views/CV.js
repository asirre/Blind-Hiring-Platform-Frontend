import React, { useState, useContext, useEffect } from 'react';
import { CButton, CCol, CCard, CCardText, CCardBody, CRow } from "@coreui/react";
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar";
import { useNavigate } from "react-router-dom";
import { AccountContext } from '../Account';
import axios from 'axios';
import RouteGuard from './RouteGuard';

const CV = () => {

  const [selectFileURL, setSelectFileURL] = useState();
  const [selectFile, setSelectFile] = useState();
  const [jwtToken, setjwtToken] = useState();
  const [email, setEmail] = useState();
  
  const hiddenFileInput = React.useRef(null);
  const navigate = useNavigate();

  const { getSession } = useContext(AccountContext);
  
  const uploadFile = () => {
    hiddenFileInput.current.click();
  };

  function handleChange(event) {
    setSelectFile(event.target.files[0]);
    setSelectFileURL(URL.createObjectURL(event.target.files[0]));
  }


  useEffect(()=> {
    getSession()
    .then(session => {
      setjwtToken(session.idToken.jwtToken);
      setEmail(session.idToken.payload.email); 
    })
  }, []);

  const approveCV = async event => {

    if (selectFile != undefined) {

      var blob = new Blob([selectFile], {type : 'application/pdf'});
      var fileOfBlob = new File([blob], selectFile.name);


      var config = {
        method: 'POST',
        url: 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/cv-upload/'+ selectFile.name,
        headers: {
            'Authorization': jwtToken,
            'Content-Type': 'application/pdf'
        },
        data : fileOfBlob
      };

      await axios(config)
        .then( async function (response) {
          console.log(response)
          var config = {
            method: 'POST',
            url: 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/user-metadata/'+ email,
            headers: {
                'Authorization': jwtToken
            },
            data: {
              'cv' : selectFile.name
            }
          };

        await axios(config)
        .then( function (response) {

          navigate("/feedback");
        });
        }
      );     
    }
    
  };


  if (localStorage.getItem("token") == undefined)
  return (<div>
    <RouteGuard/>
  </div>)
  else
  return (
    <>
      <Navbar/>
      <div style={{ width: "100%"}}>
        <CCol
          style={{
            backgroundColor: "#9DDAF6",
            backgroundSize: "100% 100%",
            minHeight: "100vh" }}>
          <div>
            <CRow>
              <CCol sm={6}>

                
                <CCard className="text-left"
                  style={{
                    color: "white",
                    background: "transparent",
                    marginLeft: "5vw",
                    border: "none",
                    fontSize: "1.5vw",
                  }}
                >
                  <CCardBody>
                    <CCardText >Upload your CV:</CCardText>
                    <div>
                      <input
                        id='uploadedFile'
                        type="file"
                        accept="application/pdf"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{display: 'none'}}
                      />
                      {selectFile?selectFile.name:""}
                    </div>
                    <br/>
                    <CButton
                      style={{ backgroundColor:"#3cb4d4", 
                        color: "white", 
                        width:"13vw", 
                        height:"4vw" ,
                        fontSize:"2vw"}}
                      // color="light"
                      onClick={uploadFile}
                    >
                      Select File
                    </CButton>
                  </CCardBody>
                </CCard>

              </CCol>
              <CCol sm={6}>

                
              </CCol>
            </CRow>
          </div>


          <div>
            <CCard
              style={{
                color: "white",
                position: "relative",
                background: "transparent",
                border: "none",
                marginTop: "10vh",
                marginLeft: "5vw",
                marginRight: "5vw",
                fontSize: "1.5vw",
              }}
            >
              <CCardBody>
                <CCardText style={{ visibility: selectFile?"visible":"hidden"}}>Overview:</CCardText>

                <iframe style={{ width: "100%", height:selectFile?"80vw":"0vw" }} src={selectFileURL}/>

                <CButton
                  style={{ backgroundColor:"#3cb4d4", 
                    marginTop:"2vw",
                    color: "white", 
                    width:"13vw", 
                    height:"4vw" ,
                    fontSize:"2vw",
                    visibility: selectFile?"visible":"hidden"}}
                  onClick={approveCV}
                >
                  Upload
                </CButton>
              </CCardBody>
            </CCard>
          </div>
        </CCol>
      </div>
      <BottomInfo />
    </>
  );
};

export default CV;
