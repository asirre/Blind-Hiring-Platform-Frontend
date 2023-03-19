import {
  CCard,
  CCardBody,
  CCardImage,
  CRow,
  CCol,
  CCardTitle,
  CCardText,
} from "@coreui/react";
import bg from "../img/bg.jpg";

const Job = ({ company, description, date, position }) => {
  return (
    <>
      <CCard className="mb-3 h-10" style={{width: "60%", background: "#F6F6F6", marginLeft: "10%" }}>
        <CRow className="g-0">
          <CCol md={4}>
            <CCardImage src={bg} />
          </CCol>
          <CCol md={8}>
            <CCardBody>
              <CCardTitle>{company}</CCardTitle>
              <CCardText>{description}</CCardText>
              <CCardText>
                <small className="text-medium-emphasis">Added {date}</small>
              </CCardText>
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>
    </>
  );
};


export default Job;
