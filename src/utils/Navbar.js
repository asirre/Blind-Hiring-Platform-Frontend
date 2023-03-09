import { CNavLink, CNav } from "@coreui/react";

const Navbar = ({ isLoggedIn }) => {

  if (true) {
    return (
      <CNav
        className="justify-content-space-evenly"
        component="nav"
        variant="pills"
        layout="fill"
        style={{ height: "6vh", paddingTop: "0.20vh" }}
      >
        <CNavLink style={{ color: "grey" }} href="#">
          Logo
        </CNavLink>
        <CNavLink style={{ color: "grey" }} href="listings">
          Job Listings
        </CNavLink>

        <CNavLink style={{ color: "grey" }} href="matches">
          My matches
        </CNavLink>

        <CNavLink style={{ color: "grey" }} href="products">

        </CNavLink>
        <CNavLink style={{ color: "grey" }} href="account">
          My account
        </CNavLink>
      </CNav>
    );
  }
  return (
    <>
      <CNav
        component="nav"
        variant="pills"
        style={{ height: "6vh", paddingTop: "0.20vh" }}
      >
        <CNavLink style={{ color: "grey", marginLeft:"10vw" }} href="#">
          Logo
        </CNavLink>
        </CNav>
    </>
  );

};

export default Navbar;
