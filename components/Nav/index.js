import React from "react";
import styled from "@emotion/styled";
import { lavenderToBlue } from "../common/style-constants";

const NavBar = styled.nav`
  background: ${lavenderToBlue};
  height: 5rem;
  padding: 1rem;
`;

const Nav = ({ children }) => {
  return <NavBar>{children}</NavBar>;
};

export default Nav;
