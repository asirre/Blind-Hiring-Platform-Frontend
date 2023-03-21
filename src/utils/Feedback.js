import React from "react";
import CIcon from "@coreui/icons-react";
import { cilXCircle, cilCheckCircle } from "@coreui/icons";

const StringMap = {
  FACES: "picture containing a face",
  DATE: "date that can lead to age discrimination",
  GPE: "geopolitical entity information",
  NORP: "mention of nationality or religious or political groups",
  PERSON: "mention of a person",
  PRONOUNS: "pronouns that can lead to disrimination",
};

const FeedbackPoint = ({ name, count }) => {
  return (
    <div className="feedback-point flex flex-col gap-2">
      BHP has found a {StringMap[name]} in {count}{" "}
      {count === "1" ? "place" : "places"} in your CV.
    </div>
  );
};

const Feedback = ({ cv_feedback }) => {
  console.log(cv_feedback);

  const hasPassedVerification = () => {
    return (
      Object.keys(cv_feedback)
        .filter((key) => key !== "key")
        .filter((key) => cv_feedback[key].length !== 0).length === 0
    );
  };

  return (
    <div className="job-card w-full flex rounded overflow-hidden bg-slate-100 border border-slate-600">
      <div className="job-details py-3 px-4 flex flex-col">
        <div className="job-header mb-2 flex gap-3">
          <div className="job-image">
            {hasPassedVerification() ? (
              <CIcon height="50px" icon={cilCheckCircle} size="xl" />
            ) : (
              <CIcon height="50px" icon={cilXCircle} size="xl" />
            )}
          </div>
          <div className="job-title font-sans h-full flex flex-col">
            <h1 className="text-xl">{cv_feedback.key}</h1>
            {hasPassedVerification() ? (
              <p className="job-posted-date text-sm text-green-600 justify-self-end mb-2">
                Passed verification
              </p>
            ) : (
              <p className="job-posted-date text-sm text-red-600 justify-self-end mb-2">
                Failed verification
              </p>
            )}
          </div>
        </div>
        {Object.keys(cv_feedback).map((name) => {
          if (cv_feedback[name].length === 0 || name === "key") {
            return null;
          }
          return <FeedbackPoint name={name} count={cv_feedback[name][0]} />;
        })}
      </div>
    </div>
  );
};

export default Feedback;