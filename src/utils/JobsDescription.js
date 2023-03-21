import { CButton } from "@coreui/react";
import React from "react";
import placeholder from "../img/google_logo.png";

const JobDescription = ({ job }) => {

  return (
    <div className="w-4/5 h-4/5 z-10 mx-auto mt-20 flex flex-col">
      <div
        id="Title"
        className="h-16 w-11/12 mx-auto mb-10 bg-primaryTailwind border border-gray-400 flex items-center justify-center rounded"
      >
        <h1 className="text-2xl m-0 font-light">Job Description </h1>
      </div>
      <div
        id="Jobs"
        className="h-60 w-11/12 mx-auto mb-10 bg-primaryTailwind border border-gray-400 flex items-center justify-center rounded"
      >
        <div class="p-4 flex-fill bd-highlight">
          <div className="job-image">
            <img
              src={placeholder}
              width="64"
              height="64"
              className="float-left"
            />
          </div>
          <div className="job-title font-sans p-2 h-full flex-fill">
            <h1 className="text-xl">
              <b>
                {job.job_position} {job.organization}
              </b>
            </h1>
            <p className="job-posted-date text-sm text-gray-500 justify-self-end mb-2">
              Posted {job.posting_date}
            </p>
          </div>
        </div>
        <div className="job-description p-2 flex-grow-1 bd-highlight">
          <p>{job.description}</p>
        </div>
      </div>
      <div className="flex w-4/5 mx-auto justify-end pt-4" id="button">
        <CButton>Apply</CButton>
      </div>
    </div>
  );
};

export default JobDescription;
