import React from "react";
import styled, { css } from "styled-components";
import {
  lavender,
  letterSpacing,
  babyBlue,
  lightgray,
  red
} from "../common/style-constants";

const sharedCss = css`
  min-width: 8rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  border-color: none;
  font-size: 1rem;
  opacity: 0.9;
  letter-spacing: ${letterSpacing};
  box-shadow: 0px 4px 8px #888888;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    opacity: 1;
    box-shadow: 0px 2px 4px #888888;
  }
`;

const Button = styled.button`
  ${sharedCss};
  color: white;
  background: ${({ disabled }) =>
    disabled
      ? `linear-gradient(135deg, ${lightgray} 70%, white 100%`
      : `linear-gradient(135deg, ${lavender} 70%, ${babyBlue} 100%`});
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
  background: ${({ disabled }) =>
    disabled
      ? `linear-gradient(135deg, ${lightgray} 70%, white 100%`
      : `linear-gradient(135deg, white 70%, ${babyBlue} 100%`});
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
  background: linear-gradient(135deg, ${red} 70%, white 100%);
`;

export const RedButton = ({ children, ...props }) => (
  <Danger title={children} {...props}>
    {children}
  </Danger>
);
