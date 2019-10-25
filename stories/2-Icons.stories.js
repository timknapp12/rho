import React from "react";
import { storiesOf } from "@storybook/react";
import {
  BlackLogoText,
  WhiteLogo,
  BlackLogo
} from "../components/common/icons";

storiesOf("Icons", () => module)
  .add("black icon with text", () => <BlackLogoText fill="red" />)
  .add("icon with no text", () => (
    <div style={{ background: "blue" }}>
      <WhiteLogo fill="red" />
    </div>
  ))
  .add("black", () => <BlackLogo size="4rem" color="red" />);
