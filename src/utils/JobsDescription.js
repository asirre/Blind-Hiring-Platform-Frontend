import { CButton } from "@coreui/react";
import React from "react";
import placeholder from "../img/google_logo.png";

const JobDescription = ({ job }) => {
  console.log(job);
  return (
    <div className="w-4/5 h-4/5 z-10 mx-auto mt-20 flex flex-col">
      <div
        id="Title"
        className="h-16 w-11/12 mx-auto mb-10 bg-slate-100 border border-gray-400 flex items-center justify-center rounded"
      >
        <h1 className="text-2xl m-0 font-light">Job Description </h1>
      </div>
      <div className="job-card w-3/4 mx-auto flex rounded overflow-hidden bg-slate-100 border border-slate-600">
        <div className="job-details py-3 px-4 flex flex-col">
          <div className="job-header mb-2 flex gap-3">
            <div className="job-image">
              <img
                src={job.logo || placeholder}
                width="64"
                height="64"
                className="float-left"
              />
            </div>

            <div className="job-title font-sans h-full flex flex-col">
              <h1 className="text-xl">
                <b>{job.job_position}</b> | {job.organization}
              </h1>
              <p className="job-posted-date text-sm text-gray-500 justify-self-end mb-2">
                Posted {job.posting_date}
              </p>
            </div>
          </div>
          <div className="job-description flex-1">
            <p>{job.description}</p>
          </div>
          <div className="feedback-point flex flex-col gap-2">
            <h1 className="text-base">
              <b>Salary range: </b>
              {job.minimum_salary} {job.currency} - {job.maximum_salary}{" "}
              {job.currency}
            </h1>
          </div>
          <div className="feedback-point flex flex-col gap-2">
            <h1 className="text-base">
              <b>Location:</b> {job.job_location}
            </h1>
          </div>
          <div className="feedback-point flex flex-col gap-2">
            <h1 className="text-base">
              <b>Employment type:</b> {job.emplyment_type}
            </h1>
          </div>
          <div className="feedback-point flex flex-col gap-2">
            <h1 className="text-base">
              <b>Remote policy:</b> {job.remote_policy}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-4/5 mx-auto justify-end pt-4" id="button">
        <CButton>Apply</CButton>
      </div>
    </div>
  );
};

export default JobDescription;
