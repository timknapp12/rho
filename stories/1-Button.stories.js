import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Primary, Secondary, Third, RedButton } from "../components/buttons";
import {
  lavender,
  seafoam,
  babyBlue
} from "../components/common/style-constants";

storiesOf("Buttons", () => module)
  .add("default", () => (
    <Primary onClick={action("this is a button")}>Hello</Primary>
  ))
  .add("long title", () => (
    <Primary onClick={action("this is a button")}>
      Hello this is a long title
    </Primary>
  ))
  .add("disabled", () => (
    <Primary disabled onClick={action("this is a button")}>
      {" "}
      Hello this is disabled
    </Primary>
  ))
  .add("Secondary", () => <Secondary>Secondary button</Secondary>)
  .add("Secondary disabled", () => (
    <Secondary disabled>Secondary button</Secondary>
  ))
  .add("Danger", () => <RedButton>Red Button</RedButton>)
  .add("Multiple buttons", () => (
    <div>
      <Primary>Purhcase</Primary>
      <Secondary style={{ marginLeft: 12, marginRight: 12 }}>Cancel</Secondary>
      <RedButton style={{ marginRight: 12 }}>Delete</RedButton>
      <Third style={{ color: lavender, marginRight: 12 }} color={babyBlue}>
        Third Button
      </Third>
      <Third color={lavender}>Fourth Button</Third>
    </div>
  ));
