import React from "react";
import { storiesOf } from "@storybook/react";
import { Logo, LogoIcon } from "../components/common/icons";

storiesOf("Icons", () => module)
  .add("Logo", () => <Logo />)
  .add("Svg", () => <LogoIcon color="red" />);
