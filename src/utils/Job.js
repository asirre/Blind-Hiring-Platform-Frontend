import {
  CCard,
  CCardBody,
  CCardImage,
  CRow,
  CCol,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import bg from "../img/bg.jpg";

const Job = ({job,index}) => {
  return (
    <>
      <CCard className="mb-3" style={{width: "50%", background: "#F6F6F6", marginLeft: "10%" }}>
        <CRow className="g-0">
          <CCol md={4}>
            <CCardImage src={bg} />
          </CCol>
          <CCol md={8}>
            <CCardBody>
              <CCardTitle>{job.organization}</CCardTitle>
              <CCardText>{job.job_position}</CCardText>
              <CCardText>{job.description}</CCardText>
              <CCardText>
                <small className="text-medium-emphasis">Posted {job.posting_date}</small>
              </CCardText>
              <CButton color="secondary" href="/apply">Apply</CButton>
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>
    </>
  );
};


export default Job;
