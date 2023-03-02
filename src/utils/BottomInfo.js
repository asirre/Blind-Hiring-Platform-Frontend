import {
  CCol,
  CRow,
  CCard,
  CCardText,
  CCardBody,
  CCardTitle,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { cibTwitter } from "@coreui/icons";

const BottomInfo = () => {
  return (
    <CCol style={{ backgroundColor: "#ECEEEE", height: "40%" }}>
      <CRow>
        <CCard
          style={{
            position: "absolute",
            color: "grey",
            background: "transparent",
            border: "none",
            width: "20rem",
            height: "5rem",
            marginLeft: "20%",
            marginTop: "2%",
          }}
        >
          <CCardBody>
            <CCardTitle>Company name</CCardTitle>
            <CCardText>Address: Science Park, Amsterdam</CCardText>
            <CCardText>Tel 000000000</CCardText>
            <CCardText>Email support@corporate.cc</CCardText>
            <CIcon icon={cibTwitter} size="xl" />
          </CCardBody>
        </CCard>
        <CCard
          style={{
            position: "absolute",
            marginLeft: "70%",
            color: "grey",
            background: "transparent",
            border: "none",
            width: "10rem",
            height: "10rem",
            marginTop: "2%",
          }}
        >
          <CCardBody>
            <CCardTitle>Information</CCardTitle>
            <CCardText>Products</CCardText>
          </CCardBody>
        </CCard>
      </CRow>
    </CCol>
  );
};

export default BottomInfo;
