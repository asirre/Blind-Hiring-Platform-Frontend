import { CButton } from "@coreui/react";
import placeholder from "../img/google_logo.png";
import CIcon from "@coreui/icons-react";
import { cilArrowRight } from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";

const Job = ({ job, index }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    startTransition(() => {
      navigate("/apply/" + job.job_posting_id, { state: { job: job } });
    });
  };

  return (
    <>
      <div className="job-card w-full flex rounded justify-between overflow-hidden bg-slate-100 border border-gray-500">
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
        </div>
        <div className="job-apply mx-8 flex justify-center items-center">
          <CButton
            onClick={handleClick}
            color="secondary"
          >
            <CIcon color="primary" icon={cilArrowRight} size="xl" />
          </CButton>
        </div>
      </div>
    </>
  );
};

export default Job;
