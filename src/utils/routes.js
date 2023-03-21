import React from "react";

const SignUp = React.lazy(() => import("../views/Signup"));
const LogIn = React.lazy(() => import("../views/Login"));
const Homepage = React.lazy(() => import("../views/Homepage"));
const ListJobs = React.lazy(() => import("../views/ListJobs"));
const CV = React.lazy(() => import("../views/CV"));
const JobUpload = React.lazy(() => import("../views/JobUpload"));
const Apply = React.lazy(() => import("../views/Apply"));

const routes = [
  { path: "/signup", name: "Sign up", element: SignUp, protected: false },
  { path: "/login", name: "Log In", element: LogIn, protected: false },
  { path: "/", name: "Homepage", element: Homepage, protected: false},
  { path: "/jobs", name: "Jobs", element: ListJobs, protected: false},
  { path: "/cv", name: "CV", element: CV, protected: false},
  { path: "/jobUpload", name: "JobUpload", element: JobUpload, protected: false},
  { path: "/apply", name: "Apply", element: Apply, protected: false}
];

export default routes;
