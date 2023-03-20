import React, { useState, useContext, useEffect, getSession } from "react";
import { CCol, CRow, CSpinner, CButton } from "@coreui/react";
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar";
import Feedback from "../utils/Feedback";
import { getUsersCVS, getCVFeedback } from "../utils/LambdaRequests";
import { AccountContext } from "../Account";

const testFeedback = [
  {
    key : "CV_1",
    FACES : [1],
    DATE : [2],
    GPE : [5],
    NORP : [1555678],
    PERSON : [],
    PRONOUNS : [3],
  },
  {
    key : "CV_2",
    FACES : [],
    DATE : [],
    GPE : [],
    NORP : [],
    PERSON : [],
    PRONOUNS : [],
  }
]

const FeedbackView = () => {
  const [isLoading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [usersCVS, setUsersCVS] = useState([]);
  const [email, setEmail] = useState();

  const { getSession } = useContext(AccountContext);

  const getFeedback = async (cv) => {
    const response = await getCVFeedback(cv);
    return response;
  };

  const callFeedback = (data) => {
    const feedbackSet = new Set();
    data.forEach((cv) => {
      getFeedback(cv)
        .then((response) => {
          feedbackSet.add(response);
          setFeedback([...feedbackSet]);
        })
        .then(() => {
          // console.log(feedback)
          setLoading(false);
        });
    });
  };

  const getCVS = async (email) => {
    const response = await getUsersCVS(email);
    setUsersCVS(["CV-Lebenslauf-Germany-English-page+1.pdf", "CV2.pdf"]);
    return ["CV-Lebenslauf-Germany-English-page+1.pdf", "CV2.pdf"];
  };

  useEffect(() => {
    getSession()
      .then((session) => {
        setEmail(session.idToken.payload.email);
        return getCVS(session.idToken.payload.email);
      })
      .then((data) => {
        callFeedback(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar isLoggedIn={true} />
      <CCol style={{ height: "74vh", width: "100vw", float: "left" }}>
        <div
          style={{
            backgroundColor: "#9DDAF6",
            height: "22vh",
            position: "absolute",
            width: "100vw",
            zIndex: "-1",
          }}
        ></div>
        <div className="w-4/5 h-4/5 z-10 mx-auto mt-20 flex flex-col">
          <div
            id="Title"
            className="h-16 w-11/12 mx-auto mb-10 bg-primaryTailwind border border-gray-400 flex items-center justify-center rounded"
          >
            <h1 className="text-2xl m-0 font-light">CV Feedback </h1>
          </div>
          <div
            id="Feedback"
            className="h-4/5 w-4/5 float-left mx-auto flex-grow flex flex-col gap-4 justify-center items-center"
          >
            {isLoading ? (
              <CSpinner />
            ) : (
              testFeedback.map((cv_feedback, index) => (
                <Feedback cv_feedback={cv_feedback} index={index} />
              ))
            )}
          </div>
          <div className="flex w-4/5 mx-auto justify-end pt-4" id="button">
            <CButton href="/add-job">Add posting</CButton>
          </div>
        </div>
      </CCol>
      <BottomInfo />
    </div>
  );
};

export default FeedbackView;
