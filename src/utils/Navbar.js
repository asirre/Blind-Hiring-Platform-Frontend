import {
  CNavLink,
  CNav,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbarToggler,
  CNavbar,
  CContainer,
  CNavbarBrand,
  CDropdownDivider,
  CCollapse,
  CNavbarNav,
  CNavItem,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";
import Pool from '../views/UserPool';

const Navbar = ({ isLoggedIn }) => {

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  }

  if (isLoggedIn) {
    return (
      <CNavbar className="bg-light" expand="lg" colorScheme="light" >
        <CContainer>
          <CNavbarBrand href="#">BHP</CNavbarBrand>
          <CNavbarToggler aria-label="Toggle navigation" aria-expanded={true} />
          <CCollapse className="navbar-collapse" visible={true}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="/jobs" active>
                  Job Listings
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Matches</CNavLink>
              </CNavItem>
              <CDropdown dark component="li" variant="nav-item">
                <CDropdownToggle>My account</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem onClick={logout}>Log out</CDropdownItem>
                  <CDropdownItem href="#">Settings</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    );
  }
  return (
    <CNavbar className="bg-light" expand="lg" colorScheme="light" >
    <CContainer>
      <CNavbarBrand href="#">BHP</CNavbarBrand>
      <CNavbarToggler aria-label="Toggle navigation" aria-expanded={true} />
      <CCollapse className="navbar-collapse" visible={true}>
        <CNavbarNav>
          <CNavItem>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/login">Log in</CNavLink>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
  );
};

export default Navbar;
