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

const NavbarLogo = ({}) => {
  return (
    <a className="logo text-2xl m-0 text-slate-900 no-underline" href="/">BHP</a>
  )
}

const NavbarButton = ({children, href}) => {
  return (
    <a className="navbar-button w-1/3 text-slate-900 hover:text-sky-400 text-md font-body m-0 text-center inline-block align-middle no-underline" href={href}>
      {children}
    </a>
  )
}

const Navbar = ({ isLoggedIn }) => {

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  }

  if (isLoggedIn) {
    return (
      <div className="custom-navbar bg-slate-100 w-full p-0 h-12">
        <div className="navbar-content w-4/5 h-full mx-auto grid grid-cols-6">
          <div className="navbar-logo col-start-1 h-full flex items-center content-center font-mono">
            <NavbarLogo></NavbarLogo>
          </div>
          <div className="navbar-buttons col-span-3 col-start-4 h-full flex items-center justify-end">
          <NavbarButton href="/jobs">Job Listings</NavbarButton>
          <NavbarButton href="#">Matches</NavbarButton>
          <NavbarButton href="#">Sign out</NavbarButton>
          </div>
        </div>
      </div>
      // <CNavbar className="bg-light" expand="lg" colorScheme="light" >
      //   <CContainer>
      //     {/* <CNavbarBrand href="/">BHP</CNavbarBrand> */}
      //     <CNavbarToggler aria-label="Toggle navigation" aria-expanded={true} />
      //     <CCollapse className="navbar-collapse" visible={true}>
      //       <CNavbarNav>
      //         <CNavItem>
      //           <CNavLink href="/jobs" active>
      //             Job Listings
      //           </CNavLink>
      //         </CNavItem>
      //         <CNavItem>
      //           <CNavLink href="#">Matches</CNavLink>
      //         </CNavItem>
      //         <CDropdown dark component="li" variant="nav-item" className="d-flex">
      //           <CDropdownToggle>My account</CDropdownToggle>
      //           <CDropdownMenu>
      //             <CDropdownItem onClick={logout}>Log out</CDropdownItem>
      //             <CDropdownItem href="#">Settings</CDropdownItem>
      //           </CDropdownMenu>
      //         </CDropdown>
      //       </CNavbarNav>
      //     </CCollapse>
      //   </CContainer>
      // </CNavbar>
    );
  }
  return (
    <div className="custom-navbar bg-slate-100 w-full p-0 h-12">
    <div className="navbar-content w-4/5 h-full mx-auto grid grid-cols-6">
      <div className="navbar-logo col-start-1 h-full flex items-center content-center font-mono">
        <NavbarLogo></NavbarLogo>
      </div>
      <div className="navbar-buttons col-span-3 col-start-4 h-full flex items-center justify-end">
      <NavbarButton href="/login">Log In</NavbarButton>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
