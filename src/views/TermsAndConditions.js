import Navbar from "../utils/Navbar";
import BottomInfo from "../utils/BottomInfo";
import { CCol } from "@coreui/react";

const TermsAndConditions = () => {
  return (
    <>
    <Navbar/>

      <CCol
          style={{
            backgroundSize: "100% 100%",
            minHeight: "100vh" }}>
        <h1>Terms and Conditions</h1>
        <p>We will not steal or sell your data. Pinky promise!</p>
      </CCol>

      <BottomInfo />
    </>
  );
};

export default TermsAndConditions;
