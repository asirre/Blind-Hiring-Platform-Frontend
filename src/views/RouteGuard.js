import Navbar from "../utils/Navbar";
import BottomInfo from "../utils/BottomInfo";
import { CButton, CCol } from "@coreui/react";
import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

const RouteGuard = () => {

  const navigate = useNavigate();

  return (
    <>
    <Navbar/>

      <CCol
          style={{
            backgroundSize: "100% 100%",
            minHeight: "100vh" }}>
        <h1>Oops, you seem to be lost</h1>
        <p>This button will take you back to safety. Maybe you fogot to login?</p>
        <CButton onClick={() => {startTransition(() => {navigate("/login")})}} >Back</CButton>
      </CCol>

      <BottomInfo />
    </>
  );
};

export default RouteGuard;
