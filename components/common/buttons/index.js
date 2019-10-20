import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: lightblue;
`;

const Primary = ({ children }) => <Button>{children}</Button>;

export default Primary;
