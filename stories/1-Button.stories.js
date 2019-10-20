import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Primary from "../components/common/buttons";

storiesOf("Buttons", () => module).add("default", () => (
  <Primary>Hello</Primary>
));
