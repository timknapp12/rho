import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  lavender,
  letterSpacing,
  lavenderToBlue,
  whiteToBlue,
  red,
  grayToWhite,
  boxShadowMedium,
  boxShadowSmall
} from "../common/style-constants";

const sharedCss = css`
  min-width: 8rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  border-color: none;
  font-size: 1rem;
  opacity: 0.8;
  letter-spacing: ${letterSpacing};
  box-shadow: ${boxShadowMedium};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    opacity: 1;
    box-shadow: ${boxShadowSmall};
  }
`;

const Button = styled.button`
  ${sharedCss};
  color: white;
  background: ${({ disabled }) => (disabled ? grayToWhite : lavenderToBlue)};
`;

export const Primary = ({ children, disabled = false, ...props }) =>
  console.log("disabled", disabled) || (
    <Button title={children} disabled={disabled} {...props}>
      {children}
    </Button>
  );

const SecondaryButton = styled.button`
  ${sharedCss};
  color: ${({ disabled }) => (disabled ? "white" : lavender)};
  background: ${({ disabled }) => (disabled ? grayToWhite : whiteToBlue)};
`;

export const Secondary = ({ children, ...props }) => (
  <SecondaryButton title={children} {...props}>
    {children}
  </SecondaryButton>
);

const ThirdButton = styled.button`
  ${sharedCss};
  color: white;
  background: ${({ color }) => color};
`;

export const Third = ({ children, color, ...props }) => (
  <ThirdButton title={children} color={color} {...props}>
    {children}
  </ThirdButton>
);

const Danger = styled.button`
  ${sharedCss};
  color: white;
  background: ${red};
`;

export const RedButton = ({ children, ...props }) => (
  <Danger title={children} {...props}>
    {children}
  </Danger>
);
