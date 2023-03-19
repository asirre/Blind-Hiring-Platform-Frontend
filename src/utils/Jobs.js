import { CCardGroup, CRow } from "@coreui/react";
import { useMutation } from "@tanstack/react-query";
// import AsyncSelect from "react-select/async";
import Job from "./Job";
import { getAllJobs } from "../utils/get_all_jobs_example";

const Jobs = () => {
  const getData = async () => {
    const response = await getAllJobs();
    return console.log(response.data);
  };

  getData();
  const jobs = [
    {
      company: "facebook",
      title: "software engineer",
      location: "amsterdam",
      description: "this is a description",
      requirements: "this is a requirement",
      salary: "1000",
      link: "https://www.facebook.com/careers/jobs/",
      date: "03.04.2021",
    },
    {
      company: "google",
      title: "software engineer",
      location: "amsterdam",
      description: "this is a description1",
      requirements: "this is a requirement1",
      salary: "1000",
      link: "https://www.facebook.com/careers/jobs/",
      date: "04.05.2021",
    },
    {
      company: "amazon",
      title: "software engineer",
      location: "amsterdam",
      description: "this is a description2",
      requirements: "this is a requirement2",
      salary: "1000",
      link: "https://www.facebook.com/careers/jobs/",
      date: "04.05.2022",
    },
  ];

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
          height: "90%",
          width: "80%",
          float: "left",
          marginLeft: "10%",
          marginTop: "5%",
        }}
      >
        <CRow xs={{ cols: 1 }}>
          {jobs.map((job) => (
            <Job
              position={job.position}
              company={job.company}
              description={job.description}
              date={job.date}
            />
          ))}
        </CRow>
      </div>
      <div id="button"></div>
    </div>
  );
};

export default Jobs;
