import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Primary, Secondary } from "../components/common/buttons";

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
  .add("Two buttons", () => (
    <div>
      <Primary>Purhcase</Primary>
      <Secondary style={{ marginLeft: 12, marginRight: 12 }}>Cancel</Secondary>
    </div>
  ));
