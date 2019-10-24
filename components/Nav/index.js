import React from "react";
import styled from "@emotion/styled";
import { lavenderToBlue } from "../common/style-constants";

const NavBar = styled.nav`
  background: ${lavenderToBlue};
  height: 4rem;
`;

const Nav = () => {
  return <NavBar>Hello</NavBar>;
};

export default Nav;
