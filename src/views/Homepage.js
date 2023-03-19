import { CButton, CCol, CCard, CCardText, CCardBody } from "@coreui/react";
import bg from "../img/bg.jpg";
import BottomInfo from "../utils/BottomInfo";
import Navbar from "../utils/Navbar"

const Homepage = () => {
  return (
    <>
      <Navbar isLoggedIn={false} />
      <div style={{ height: "10vh", width: "100vw" }}>
        <CCol
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "100% 100%",
            height: "74vh",
          }}
        >
          <CCard className="text-center"
            style={{
              color: "white",
              position: "absolute",
              width: "30vw",
              background: "transparent",
              border: "none",
              marginTop: "7vh",
              marginLeft: "55vw",
              marginRight: "15vw",
              fontSize: "4vw",
            }}
          >
            <CCardBody>
              <CCardText >Level the playing field for all candidates</CCardText>
              <CButton
                style={{ color: "#2596be" }}
                color="light"
                href="/signup"
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
