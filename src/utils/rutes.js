import React from "react";

const Register = React.lazy(() => import("../views/Register"));
const Homepage = React.lazy(() => import("../views/Homepage"));

const routes = [
  { path: "/register", name: "Register", element: Register, protected: false },
  { path: "/", name: "Homepage", element: Homepage, protected: false}
];

export default routes;
