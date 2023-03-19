import React from "react";

const SignUp = React.lazy(() => import("../views/Signup"));
const LogIn = React.lazy(() => import("../views/Login"));
const Homepage = React.lazy(() => import("../views/Homepage"));
const ListJobs = React.lazy(() => import("../views/ListJobs"));

const routes = [
  { path: "/signup", name: "Sign up", element: SignUp, protected: false },
  { path: "/login", name: "Log In", element: LogIn, protected: false },
  { path: "/", name: "Homepage", element: Homepage, protected: false},
  { path: "/jobs", name: "Jobs", element: ListJobs, protected: false}
];

export default routes;
