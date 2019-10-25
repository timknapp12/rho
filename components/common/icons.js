import React from "react";
import RhoTree from "../icons/RhoTree";
import RhoTreeWhite from "../icons/RhoTreeWhite";
import RhoTreeBlack from "../icons/RhoTreeBlack";

export const BlackLogoText = props => <RhoTree fill={props.fill} />;

export const WhiteLogo = props => (
  <RhoTreeWhite
    style={{ width: props.size, stroke: props.color, fill: props.color }}
  />
);

export const BlackLogo = props => (
  <RhoTreeBlack
    style={{ width: props.size, stroke: props.color, fill: props.color }}
  />
);
