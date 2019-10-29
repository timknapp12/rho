import React from "react";
import RhoTree from "../icons/RhoTree";
import RhoTreeWhite from "../icons/RhoTreeWhite";
import RhoTreeBlack from "../icons/RhoTreeBlack";
import CartBlack from "../icons/CartBlack";
import CartWhite from "../icons/CartWhite";
import CartBlack2 from "../icons/CartBlack2";

export const BlackLogoText = props => <RhoTree fill={props.fill} />;

export const WhiteLogo = props => (
  <RhoTreeWhite
    style={{
      width: props.size,
      stroke: props.color,
      fill: props.color
    }}
  />
);

export const BlackLogo = props => (
  <RhoTreeBlack
    style={{ width: props.size, stroke: props.color, fill: props.color }}
  />
);

export const BlackCart = props => (
  <CartBlack width={props.size} fill={props.color} stroke={props.color} />
);

export const WhiteCart = props => (
  <CartWhite width={props.size} fill={props.color} stroke={props.color} />
);

export const BlackCart2 = props => (
  <CartBlack2 width={props.size} fill={props.color} stroke={props.color} />
);
