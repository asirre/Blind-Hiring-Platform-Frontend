import { CButton } from "@coreui/react";
import React, {startTransition} from "react";
import placeholder from "../img/google_logo.png";
import { callLambda } from "./LambdaRequests";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JobDescription = ({ job }) => {
  const jwtToken = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  let navigate = useNavigate();

  const getCVs = async () => {
    const config = {
      method: "get",
      url:
        "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/user-metadata/" +
        email,
      headers: {
        Authorization: jwtToken,
      },
    };
    console.log(config);
    const response = await axios(config).catch(function (error) {
      console.log(error);
      alert("Oops, something went wrong! Please try again.");
    });
    console.log(response.data);
    return response.data;
  };

  const sendJobUpdate = async () => {
    await getCVs().then((cvs) => {
      console.log(cvs);
      // Dynamically create the data object
      let candidates = cvs.cv.map((cvPath) => {
        return {
          user_id: email,
          attached_cv:
            "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/cv-upload/" +
            cvPath,
        };
      });
      callLambda({
        token: localStorage.getItem("token"),
        method: "patch",
        url:
          "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting/" +
          job.job_posting_id,
        data: {
          candidates: candidates,
        },
      }).then((response) => {
        console.log(response);
        alert("You have successfully applied for this job!");
        navigate("/jobs", { state: { job: job } });
      });
    });

  };

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
        <CButton onClick={sendJobUpdate}>Apply</CButton>
      </div>
    </div>
  );
};

export default JobDescription;
