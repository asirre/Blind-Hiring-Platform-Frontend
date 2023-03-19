import { CCardGroup, CRow, CButton } from "@coreui/react";
import React, { useEffect, useMemo, useState, Spinner } from "react";
import { useMutation } from "@tanstack/react-query";
// import AsyncSelect from "react-select/async";
import Job from "./Job";
import { getAllJobs, usersJob, getCVFeedback, createJobPosting } from "./LambdaRequests";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllJobs();
      setJobs(response)
    };
    getData();
  }, []);


  useEffect(() => {
    const getData = async () => {
      const response = await createJobPosting();
      console.log(response)
    };
    getData();
  }, []);

  return (
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
          All listed Job Positions{" "}
        </h1>
      </div>
      <div
        id="Jobs"
        className="h-4/5 w-4/5 float-left mx-auto flex-grow overflow-y-scroll"
      >
        <ul className="w-full flex flex-col gap-4">
            {jobs.map((job, index) => (
            <Job
              job={job} index={index}
            />
          ))}
        </ul>
      </div>
      <div className="flex w-4/5 mx-auto justify-end pt-4"  id="button">
        <CButton href="/add-job">Add posting</CButton>
      </div>
    </div>
  );
};

export default Jobs;
