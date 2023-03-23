import React, {useEffect} from "react";


const SignUp = React.lazy(() => import("../views/Signup"));
const LogIn = React.lazy(() => import("../views/Login"));
const Homepage = React.lazy(() => import("../views/Homepage"));
const ListJobs = React.lazy(() => import("../views/ListJobs"));
const CV = React.lazy(() => import("../views/CV"));
const JobUpload = React.lazy(() => import("../views/JobUpload"));
const TermsAndConditions = React.lazy(() => import("../views/TermsAndConditions"));
const FeedbackView = React.lazy(() => import("../views/FeedbackView"));
const Apply = React.lazy(() => import("../views/Apply"));
const RouteGuard = React.lazy(() => import("../views/RouteGuard"));


const ApiDocsRedirect = () => {
    useEffect(() => {
        const url = "https://app.swaggerhub.com/apis-docs/scorpion0206/blind-hiring/1.0";
        window.location.href = url;
    }, []);

    return null;
};


const routes = [
    {path: "/", name: "Homepage", element: Homepage, protected: false},
    {path: "/signup", name: "Sign up", element: SignUp, protected: false},
    {path: "/login", name: "Log In", element: LogIn, protected: false},
    {path: "/jobs", name: "Jobs", element: ListJobs, protected: false},
    {path: "/cv", name: "CV", element: CV, protected: false},
    {path: "/job-upload", name: "JobUpload", element: JobUpload, protected: false},
    {path: "/terms-and-conditions", name: "TermsAndConditions", element: TermsAndConditions, protected: false},
    {path: "/feedback", name: "Feedback", element: FeedbackView, protected: true},
    {path: "/api-docs", name: "ApiDocs", element: ApiDocsRedirect, protected: false},
    {
        path: "/apply/:id",
        name: "Apply",
        element: Apply,
        protected: false,
    },
    {path: "/*", name: "RouteGuard", element: RouteGuard, protected: false},

];

export default routes;
