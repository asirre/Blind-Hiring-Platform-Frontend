import React, { useState, useContext, useEffect } from 'react';
import { CButton, CCol, CRow, CForm, CFormTextarea, CFormLabel, CFormInput, CFormSelect } from "@coreui/react";
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar";
import { useNavigate } from "react-router-dom";
import { AccountContext } from '../Account';
import axios from 'axios';
import RouteGuard from './RouteGuard';

const JobUpload = () => {

  const [imageURL, setImageURL] = useState();
  const [image, setImage] = useState();
  const [jwtToken, setjwtToken] = useState();

  const [organization, setOrganization] = useState();
  const [location, setLocation] = useState();
  const [position, setPosition] = useState();
  const [remote, setRemote] = useState("remote");
  const [until, setUntil] = useState();
  const [minSalary, setMinSalary] = useState();
  const [maxSalary, setMaxSalary] = useState();
  const [currency, setCurrency] = useState("EUR");
  const [contract, setContract] = useState();
  const [employment, setEmployment] = useState("full-time");
  const [description, setDescription] = useState();
  
  const hiddenImageInput = React.useRef(null);
  const navigate = useNavigate();

  const { getSession } = useContext(AccountContext);

  function getCurrentDate (separator='.') {

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
  }

  const timestamp = Date.now().toString();
  // const data =
  //   `{"job_posting_id": "${timestamp}",
  //   "organization": "${organization?organization:" "}",
  //   "job_location": "${location?location:" "}",
  //   "valid_until": "${until?until:getCurrentDate()}",
  //   "contract_type": "${contract?contract:" "}",
  //   "emplyment_type": "${employment?employment:" "}",
  //   "minimum_salary": ${minSalary?minSalary:0},
  //   "maximum_salary": ${maxSalary?maxSalary:0},
  //   "remote_policy": "${remote?remote:" "}",
  //   "currency": "${currency?currency:" "}",
  //   "posting_date": "${getCurrentDate()}",
  //   "job_position": "${position?position:" "}",
  //   "description": "${description?description:" "}",
  //   "logo": "${logo?logo:" "}"}`;
  
  const uploadImage = () => {
    hiddenImageInput.current.click();
  };

  function handleChange(event) {
    setImage(event.target.files[0]);
    setImageURL(URL.createObjectURL(event.target.files[0]));
  }

  function changeOrganization(event) {
    setOrganization(event.target.value);
  }

  function changeLocation(event) {
    setLocation(event.target.value);
  }

  function changePosition(event) {
    setPosition(event.target.value);
  }

  function changeMin(event) {
    setMinSalary(event.target.value);
  }

  function changeMax(event) {
    setMaxSalary(event.target.value);
  }

  function changeCurrency(event) {
    setCurrency(event.target.value);
  }

  function changeRemote(event) {
    setRemote(event.target.value);
  }

  function changeEmployment(event) {
    setEmployment(event.target.value);
  }

  function changeContract(event) {
    setContract(event.target.value);
  }

  function changeDescription(event) {
    setDescription(event.target.value);
  }

  useEffect(()=> {
    getSession()
    .then(session => {
      setjwtToken(session.idToken.jwtToken);
    })
  }, []);

  const uploadJob = async event => {

    // if (image != undefined) {
      if (true) {

      var blob = new Blob([image], {type : image.type});
      var fileOfBlob = new File([blob], image.name);

      const logoURL = await uploadLogo(timestamp, fileOfBlob);

      const data = `{"job_posting_id": "${timestamp}",
      "organization": "${organization?organization:" "}",
      "job_location": "${location?location:" "}",
      "valid_until": "${until?until:getCurrentDate()}", 
      "contract_type": "${contract?contract:" "}",
      "emplyment_type": "${employment?employment:" "}",
      "minimum_salary": ${minSalary?minSalary:0},
      "maximum_salary": ${maxSalary?maxSalary:0},
      "remote_policy": "${remote?remote:" "}",
      "currency": "${currency?currency:" "}",
      "posting_date": "${getCurrentDate()}",
      "job_position": "${position?position:" "}",
      "description": "${description?description:" "}",
      "logo": "${logoURL?logoURL:" "}"}`;

      var config = {
        method: "POST",
        url: "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting",
        headers: {
          "Authorization":  jwtToken,
          "Content-Type": "text/plain"
        },
        data: data
      }

      await axios(config)
        .then(function (response) {
          console.log(response.data);
          navigate("/jobs")
        })
        .catch(function (error) {
          console.log(error);
          alert("Oops, something went wrong! Please try again.")
        });
    }
  };

  const uploadLogo = async (jobId, image) => {
    var config = {
      method: "POST",
      url: "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting/" + jobId + "/image",
      headers: {
        "Authorization":  jwtToken,
        "Content-Type": "image/png"
      },
      data: image
    }

    const response = await axios(config)
        .catch(function (error) {
          console.log(error);
          alert("Oops, something went wrong! Please try again.")
        });

    return response.data;
  }


  if (localStorage.getItem("token") == undefined)
    return (<div>
      <RouteGuard/>
    </div>)
  else
  return (
    <>
      <Navbar/>

    <div
      className="w-4/5 h-4/5 z-10 mx-auto mt-20 flex flex-col"
      >
      <div
        id="Title"
        className="h-16 w-11/12 mx-auto mb-10 bg-primaryTailwind border border-gray-400 flex items-center justify-center rounded"
      >
        <h1
          className="text-2xl m-0 font-light"
        >
          Upload Job Description{" "}
        </h1>
      </div>

      <CForm className="align-items-center">

        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          ref={hiddenImageInput}
          onChange={handleChange}
          style={{display: 'none'}}
        />

        <CRow>
          <CCol xs="auto">
            <img src={image?imageURL:""} style={image?{ width:"20vw", height:"15vw", visibility:"visible"}: {width:"0vw", height:"0vw", visibility:'none'}} onClick={uploadImage}/>
            <CButton style={image?{width:"0vw", height:"0vw", visibility:'hidden'} :{ width:"20vw", height:"15vw", visibility:'visible'}}
              onClick={uploadImage}>Upload image</CButton>
          </CCol>

          <CCol xs="auto">
            <CRow>
              <CCol xs="auto">
                <CFormLabel htmlFor="autoSizingInput">Organization</CFormLabel>
                <CFormInput id="formOrganization" onChange={changeOrganization}/>
              </CCol>
              <CCol xs="auto">
                <CFormLabel htmlFor="autoSizingInput">Location</CFormLabel>
                <CFormInput id="formLocation" onChange={changeLocation}/>
              </CCol>
              <CCol xs="auto">
                <CFormLabel htmlFor="autoSizingSelect">Remote</CFormLabel>
                <CFormSelect id="formRemote" onChange={changeRemote}>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="in-office">In-office</option>
                </CFormSelect>
                {/* <CFormCheck type="checkbox" id="formRemote" label="Remote"/> */}
              </CCol>
            </CRow>


            <CRow>
              <CCol xs="auto">
                <CFormLabel htmlFor="autoSizingInput">Position</CFormLabel>
                <CFormInput id="formPosition" onChange={changePosition}/>
              </CCol>
              <CCol xs="auto">
                {/* <CDatePicker label="Date" locale="en-US" />
                <CDatePicker date="2022/2/16" label="formDate" locale="en-US" /> */}
              </CCol>
            </CRow>

            <CRow>
              {/* <img src={image?imageURL:""} style={{width:"20vw", height:"15vw"}}/> */}
              <CCol xs="auto">
                <CFormLabel htmlFor="autoSizingInput">Minimum salary</CFormLabel>
                <CFormInput id="formMinimum" type='number' onChange={changeMin}/>
              </CCol>
              <CCol xs="auto">
                <CFormLabel htmlFor="autoSizingInput">Maximum salary</CFormLabel>
                <CFormInput id="formMaximum" type='number' onChange={changeMax}/>
              </CCol>
              <CCol xs="auto">
                <CFormLabel htmlFor="autoSizingSelect">Currency</CFormLabel>
                <CFormSelect id="formCurrency" onChange={changeCurrency}>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="JPY">JPY</option>
                  <option value="GBP">GBP</option>
                  <option value="AUD">AUD</option>
                  <option value="CAD">CAD</option>
                  <option value="CHF">CHF</option>
                  <option value="CNH">CNH</option>
                  <option value="HKD">HKD</option>
                  <option value="NZD">NZD</option>
                </CFormSelect>
              </CCol>
            </CRow>


            <CRow>
              <CCol xs="auto">
                <CFormLabel htmlFor="autoSizingInput">Contract type</CFormLabel>
                <CFormInput id="formContract" onChange={changeContract}/>
              </CCol>
              <CCol xs="auto">
                <CFormLabel htmlFor="autoSizingSelect">Employment type</CFormLabel>
                <CFormSelect id="formEmployment" onChange={changeEmployment}>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </CFormSelect>
              </CCol>
            </CRow>

          </CCol>
        </CRow>

        <CRow>
          <CCol>
            <CFormTextarea
              id="formDescription"
              label="Job Description"
              rows={3}
              onChange={changeDescription}
              // text="Must be 8-20 words long."
            >
            </CFormTextarea>
          </CCol>
        </CRow>
        {/* <CRow>
        <CCol xs="auto">
            <CButton className="flex w-4/5 mx-auto justify-end pt-4" type="submit">Upload Job</CButton>
        </CCol>
        </CRow> */}
      </CForm>

      <div className="flex w-4/5 mx-auto justify-end pt-4"  id="button">
        <CButton onClick={uploadJob}>Upload Job</CButton>
      </div>
    </div>
    <br/>

    <BottomInfo />
    </>
  );
};

export default JobUpload;
