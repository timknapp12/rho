import React from "react";
import { storiesOf } from "@storybook/react";
import {
  BlackLogoText,
  WhiteLogo,
  BlackLogo,
  BlackCart,
  WhiteCart
} from "../components/common/icons";

storiesOf("Icons", () => module)
  .add("black icon with text", () => <BlackLogoText fill="green" />)
  .add("icon with no text", () => (
    <div style={{ background: "blue" }}>
      <WhiteLogo fill="red" />
    </div>
  ))
  .add("black", () => <BlackLogo size="4rem" color="red" />)
  .add("black cart", () => <BlackCart size="4rem" />)
  .add("white cart", () => (
    <div style={{ background: "blue" }}>
      <WhiteCart size="4rem" />
    </div>
  ));
