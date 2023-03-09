import {
  CCol,
  CRow,
  CCard,
  CCardText,
  CCardBody,
  CCardTitle,
} from "@coreui/react";

// import CIcon from "@coreui/icons-react";
// import { cibTwitter } from "@coreui/icons";

const BottomInfo = () => {
  return (
    <CCol style={{ backgroundColor: "#ECEEEE", height: "29vh" }}>
      <CRow>
        <CCard
          style={{
            position: "absolute",
            color: "grey",
            background: "transparent",
            border: "none",
            width: "30vw",
            height: "4vh",
            marginLeft: "15vw",
            marginTop: "1.5vh",
          }}
        >
          <CCardBody>
            <CCardTitle style={{fontSize: "1.5vw"}} >Company name</CCardTitle>
            <CCardText style={{fontSize: "1vw"}} >Address: Science Park, Amsterdam</CCardText>
            <CCardText style={{fontSize: "1vw"}} >Email support@corporate.cc</CCardText>
            {/* <CIcon icon={cibTwitter} size="xl" /> */}
          </CCardBody>
        </CCard>
        <CCard
          style={{
            position: "absolute",
            marginLeft: "65vw",
            color: "grey",
            background: "transparent",
            border: "none",
            width: "30vw",
            height: "3vh",
            marginTop: "2vh",
          }}
        >
          <CCardBody>
            <CCardTitle style={{fontSize: "1.5vw"}}>Information</CCardTitle>
            <CCardText style={{fontSize: "1vw"}}>Products</CCardText>
          </CCardBody>
        </CCard>
      </CRow>
    </CCol>
  );
};

export default BottomInfo;
