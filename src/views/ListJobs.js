import { CCol } from "@coreui/react";
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar";
import Jobs from "../utils/Jobs";
import RouteGuard from './RouteGuard';

const ListJobs = () => {

  if (localStorage.getItem("token") == undefined)
  return (<div>
    <RouteGuard/>
  </div>)
  else
  return (
    <>
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar/>
      <CCol style={{height: "74vh", width: "100vw", float: "left"}}>
        <div
          style={{
            backgroundColor: "#9DDAF6",
            height: "22vh",
            position: "absolute",
            width: "100vw",
            zIndex: "-1"
          }}
        ></div>
        <Jobs/>
        </CCol>
        <BottomInfo />
    </div>
    </>
  );
};

export default ListJobs;
