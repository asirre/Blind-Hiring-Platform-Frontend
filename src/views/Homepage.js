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
            height: "65vh",
          }}
        >
          <CCard
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
              <CCardText style={{textAlign: "center"}}>Level the playing field for all candidates</CCardText>
              <div style={{paddingLeft: "auto"}}>
              <CButton
                style={{ color: "#2596be" }}
                color="light"
                href="/register"
              >
                Try now
              </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <BottomInfo />
      </div>
    </>
  );
};

export default Homepage;
