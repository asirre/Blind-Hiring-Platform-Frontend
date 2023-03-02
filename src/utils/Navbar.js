import { CNavLink, CNav, CCol, CRow } from "@coreui/react";

const Navbar = () => {
  return (
    <CNav
      component="nav"
      variant="pills"
      style={{ height: "3.5rem", paddingTop: "0.5rem" }}
    >
      <CCol>
        <CNavLink style={{ marginRight: "40%", color: "grey" }} href="#">
          Logo
        </CNavLink>
      </CCol>
      <CCol>
        <CRow>
          <CCol>
            <CNavLink style={{ color: "grey" }} href="homepage">
              Homepage
            </CNavLink>
          </CCol>
          <CCol>
            <CNavLink style={{ color: "grey" }} href="contact">
              Contact
            </CNavLink>
          </CCol>
          <CCol>
            <CNavLink style={{ color: "grey" }} href="products">
              Products
            </CNavLink>
          </CCol>
        </CRow>
      </CCol>
      <CCol>
        <CNavLink style={{ marginLeft: "40%", color: "grey" }} href="user">
          Log in
        </CNavLink>
      </CCol>
    </CNav>
  );
};

export default Navbar;
