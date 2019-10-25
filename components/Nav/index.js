import React from "react";
import styled from "@emotion/styled";
import { lavenderToBlue, boxShadowMedium } from "../common/style-constants";

const NavBar = styled.nav`
  background: ${({ background }) => background};
  height: 5rem;
  padding: 1rem;
  box-shadow: ${boxShadowMedium};
`;

const Nav = ({ children, background = lavenderToBlue, ...props }) => {
  return (
    <NavBar background={background} {...props}>
      {children}
    </NavBar>
  );
};

export default Nav;
