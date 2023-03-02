import { CNavLink, CNav, CCol, CRow } from "@coreui/react";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const Navbar = () => {
  return (
    <CNav component="nav" variant="pills">
      <CCol>
        <CNavLink style={{ marginRight: "40%" }} href="#">
          Logo
        </CNavLink>
      </CCol>
      <CCol>
        <CRow>
          <CCol>
            <CNavLink href="#">Homepage</CNavLink>
          </CCol>
          <CCol>
            <CNavLink href="#">Contact</CNavLink>
          </CCol>
          <CCol>
            <CNavLink href="#">Products</CNavLink>
          </CCol>
        </CRow>
      </CCol>
      <CCol>
        <CNavLink style={{ marginLeft: "40%" }} href="#">
          <CIcon icon={icon.cilUser} size="sm" />
          User
        </CNavLink>
      </CCol>
    </CNav>
  );
};

export default Navbar;
