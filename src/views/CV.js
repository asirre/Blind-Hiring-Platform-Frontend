import React, { useState, useEffect } from 'react';
import { CButton, CCol, CCard, CCardText, CCardBody, CRow } from "@coreui/react";
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar";
import FormData from 'form-data';
import { uploadCV } from '../utils/upload_file_to_s3_example';

const CV = () => {

  // const [selectFileURL, setSelectFileURL] = useState();
  const [selectFile, setSelectFile] = useState();
  
  const hiddenFileInput = React.useRef(null);
  
  // const uploadFile = event => {
  //   hiddenFileInput.current.click();
  // };

  function handleChange(event) {
    setSelectFile(event.target.files[0]);
  }

  const handleClick = (event) => { 
    event.preventDefault();

    if (selectFile != undefined) {

      const formData = new FormData();
      formData.append('selectFile', selectFile, selectFile.name);
      console.log(selectFile.name);


      var config = {
        method: 'POST',
        url: 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/cv-upload/'+ selectFile.name,
        headers: {
            'Authorization': 'eyJraWQiOiJSMFhMQW10MG9jOW5EeHR2YzRVRnViSmRkaDJvVGRMUXkrTStoOU1XYlRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2x5N0V3M3VLbiIsImNvZ25pdG86dXNlcm5hbWUiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJvcmlnaW5fanRpIjoiZDFhYTljYzEtZDRmMC00N2VkLWJjNzQtNTQ3NDNhMmVmYmQ5IiwiYXVkIjoiNDhvY21tZHNiZDZoYTFkOHBiZjI3amdkZWkiLCJldmVudF9pZCI6IjViNWNlNTM3LTA4YmMtNDZjNC1iNWNhLWJhN2VkMDVjZjIxYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc4OTc1MzM3LCJleHAiOjE2Nzg5Nzg5MzcsImlhdCI6MTY3ODk3NTMzNywianRpIjoiODJhZTdhYjEtZWI4NC00NjVhLWExOTctMmE5ZDI0ODIyNjk5IiwiZW1haWwiOiJha2lya2luaXNAZ21haWwuY29tIn0.uBy5ksiWZbc3SYZ-4Ey4vMFVPR9Off3kIj0NiZDGqh8_9u7IIXfOYthsMtOM1D2mxb8uC18N3bfC2IGE0RSO9xjhN7_OF8sCzdqtwhM3Tus8mpqiOijFci5y0PvSykU917FvpujqRSbTmFbP9d8jksz-6ydM33layOlwQ-rR8oQVFbwZRlNuH_-l192LTgVdjXuRnWJy0giVRTG0TovmqpvCEy3kI1r0BIx42Ajkv2OdheQ5Ajze7scq7u9DScWnj3-VNMMuuW0R8k7WPv0RvHZJjLaECvJza3gEpbHoTwJkT1pcgJGXz81w6SxC7WMFenwrLZ0w3Y2Ynj1XaCiqNw',
            // 'Content-Transfer-Encoding':'base64',
            'Content-Type': 'application/pdf'
        },
        data : formData
      };

      const response = uploadCV(config);
      console.log(response);
    }
    // this.handleFile(selectFile);
  };

  const approveCV = async event => {

    // if (selectFile != undefined) {

    //   const formData = new FormData();
    //   formData.append('selectFile', selectFile, selectFile.name);
    //   console.log(formData.name);


    //   var config = {
    //     method: 'PUT',
    //     url: 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/cv-upload/'+ selectFile.name,
    //     headers: {
    //         'Authorization': 'eyJraWQiOiJSMFhMQW10MG9jOW5EeHR2YzRVRnViSmRkaDJvVGRMUXkrTStoOU1XYlRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2x5N0V3M3VLbiIsImNvZ25pdG86dXNlcm5hbWUiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJvcmlnaW5fanRpIjoiZDFhYTljYzEtZDRmMC00N2VkLWJjNzQtNTQ3NDNhMmVmYmQ5IiwiYXVkIjoiNDhvY21tZHNiZDZoYTFkOHBiZjI3amdkZWkiLCJldmVudF9pZCI6IjViNWNlNTM3LTA4YmMtNDZjNC1iNWNhLWJhN2VkMDVjZjIxYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc4OTc1MzM3LCJleHAiOjE2Nzg5Nzg5MzcsImlhdCI6MTY3ODk3NTMzNywianRpIjoiODJhZTdhYjEtZWI4NC00NjVhLWExOTctMmE5ZDI0ODIyNjk5IiwiZW1haWwiOiJha2lya2luaXNAZ21haWwuY29tIn0.uBy5ksiWZbc3SYZ-4Ey4vMFVPR9Off3kIj0NiZDGqh8_9u7IIXfOYthsMtOM1D2mxb8uC18N3bfC2IGE0RSO9xjhN7_OF8sCzdqtwhM3Tus8mpqiOijFci5y0PvSykU917FvpujqRSbTmFbP9d8jksz-6ydM33layOlwQ-rR8oQVFbwZRlNuH_-l192LTgVdjXuRnWJy0giVRTG0TovmqpvCEy3kI1r0BIx42Ajkv2OdheQ5Ajze7scq7u9DScWnj3-VNMMuuW0R8k7WPv0RvHZJjLaECvJza3gEpbHoTwJkT1pcgJGXz81w6SxC7WMFenwrLZ0w3Y2Ynj1XaCiqNw',
    //         'Content-Type': 'application/pdf'
    //     },
    //     data : formData
    //   };

    //   const response = await uploadCV(config);
    //   console.log(response);
    // }
    
  };


  return (
    <>
      <Navbar isLoggedIn={false} />
      <div style={{ width: "100%" }}>
        <CCol
          style={{
            backgroundColor: "teal",
            backgroundSize: "100% 100%"}}>
          <div>
            <CRow>
              <CCol sm={6}>
                <CCard className="text-left"
                  style={{
                    color: "white",
                    background: "transparent",
                    border: "none",
                    fontSize: "4vw",
                  }}
                >
                  <CCardBody>
                    <CCardText >Upload your CV:</CCardText>
                    <CButton
                      style={{ color: "#2596be" }}
                      color="light"
                      onClick={handleClick}
                    >
                      Upload
                    </CButton>
                  </CCardBody>
                </CCard>

              </CCol>
              <CCol sm={6}>

                <CCard
                  style={{
                    color: "white",
                    background: "transparent",
                    border: "none",
                    fontSize: "2vw",
                  }}
                >
                  <CCardBody>
                    <CCardText>
                      <input
                        id='uploadedFile'
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{display: 'true'}}
                      />
                    </CCardText>
                  </CCardBody>
                </CCard>
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
                fontSize: "4vw",
              }}
            >
              <CCardBody>
                <CCardText >Overview:</CCardText>

                {/* <embed style={{ width: "100%" }} src={selectFileURL} ref={filePreview}/> */}

                <CButton
                  style={{ color: "#2596be" }}
                  color="light"
                  // onClick={approveCV}
                  // href="/"
                >
                  Approve
                </CButton>
              </CCardBody>
            </CCard>
          </div>
        </CCol>
        <BottomInfo />
      </div>
    </>
  );
};

export default CV;
