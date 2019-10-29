import React from "react";
import RhoLogo from "../icons/RhoLogo";
import CartIcon from "../icons/CartIcon";
import LavenderToBlueLogo from "../icons/LavenderToBlueLogo";
import LavenderToBlueCart from "../icons/LavenderToBlueCart";

export const LavenderToBlueCartIcon = props => (
  <LavenderToBlueCart
    width={props.size}
    fill={props.color}
    stroke={props.color}
  />
);

export const CartLogo = props => (
  <CartIcon width={props.size} fill={props.color} stroke={props.color} />
);

export const LavenderToBlueIcon = props => (
  <LavenderToBlueLogo
    width={props.size}
    fill={props.color}
    stroke={props.color}
  />
);

export const Logo = props => (
  <RhoLogo width={props.size} fill={props.color} stroke={props.color} />
);
