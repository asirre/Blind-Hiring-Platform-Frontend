import { CCardGroup, CRow, CButton } from "@coreui/react";
import React, { useEffect, useMemo, useState, Spinner } from "react";
import { useMutation } from "@tanstack/react-query";
// import AsyncSelect from "react-select/async";
import Job from "./Job";
import { getAllJobs } from "../utils/get_all_jobs_example";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllJobs();
      setJobs(response);
      console.log(response)
    };
    getData();
  }, []);

  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        marginLeft: "10%",
        marginTop: "7%",
        float: "left",
      }}
    >
      <div
        id="Title"
        style={{
          width: "90%",
          background: "white",
          border: "1px solid lightgray",
          height: "3em",
          display: "flex",
          marginLeft: "5%",
          borderRadius: "7px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.5em",
            alignSelf: "center",
            width: "100%",
            margin: "0",
            fontWeight: "400",
            color: "grey",
          }}
        >
          All listed Job Positions{" "}
        </h1>
      </div>
      <div
        id="Jobs"
        style={{
          height: "80%",
          width: "80%",
          float: "left",
          marginLeft: "10%",
          marginTop: "1%",
          overflow: "scroll",
        }}
      >
        <CRow xs={{ cols: 1 }}>
            {jobs.map((job, index) => (
            <Job
              job={job} index={index}
            />
          ))}
        </CRow>
      </div>
      <div style ={{marginTop: "37%", marginLeft: "75%"}} id="button">
      <CButton color="secondary" href="/add-job">Add posting</CButton>
      </div>
    </div>
  );
};

export default Jobs;
