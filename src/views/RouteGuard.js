import Navbar from "../utils/Navbar";
import BottomInfo from "../utils/BottomInfo";
import { CButton, CCol } from "@coreui/react";
import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

const RouteGuard = () => {

  const navigate = useNavigate();

  return (
    <>
      <CCol
          style={{
            backgroundSize: "100% 100%",
            minHeight: "100vh" }}>
        <p className="text-center mt-56 text-9xl">404</p>
        <h1 className="text-center mt-24">Oops, you seem to be lost</h1>
        <p className="text-center mt-12">This button will take you back to safety. Maybe you fogot to login?</p>
        <div className="text-center">
          <CButton className="h-12 px-6 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-lg" onClick={() => {startTransition(() => {navigate("/login")})}} >Back</CButton>
        </div>
      </CCol>

      <BottomInfo />
    </>
  );
};

export default RouteGuard;
