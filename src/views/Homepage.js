import { CButton, CCol, CCard, CCardText, CCardBody } from "@coreui/react";
import bg from "../img/bg.jpg";
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar"

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "10%", width: "100%" }}>
        <CCol
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "100% 100%",
            height: "40em",
          }}
        >
          <CCard
            style={{
              color: "white",
              position: "absolute",
              width: "25rem",
              background: "transparent",
              border: "none",
              marginTop: "7rem",
              marginLeft: "60%",
              marginRight: "20%",
              fontSize: "3.5rem",
            }}
          >
            <CCardBody>
              <CCardText>Level the playing field for all candidates</CCardText>
              <CButton
                style={{ color: "#2596be" }}
                color="light"
                href="/register"
              >
                Try now
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <BottomInfo />
      </div>
    </>
  );
};

export default Homepage;
