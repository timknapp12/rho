import React from "react";
import { storiesOf } from "@storybook/react";
import Nav from "../components/Nav";
import styled from "@emotion/styled";
import { WhiteLogo } from "../components/common/icons";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  color: white;
  height: 100%;
`;

const GridItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  grid-column-start: ${({ start }) => start};
  grid-column-end: ${({ end }) => end};
`;

storiesOf("Navbar", () => module)
  .add("default", () => (
    <Nav>
      <p style={{ color: "white" }}>
        Hello there this is a cool baavbar that i made and it is very fin to
        make although my fingers hurt form typing cus Imm not bthat good at it,
        but I try ans at leat that is aa stateint point so eventually hopefullu
        I'll be good sosmeday, lthough my fingers hurt form typing cus Imm not
        bthat good at it, but I try ans at leat that is aa stateint point so
        eventually hopefullu I'll be good sosmeday
      </p>
    </Nav>
  ))
  .add("logos", () => (
    <Nav>
      <Wrapper>
        <GridItemWrapper start={1} justify="flex-start">
          <WhiteLogo size="4rem" />
        </GridItemWrapper>
        <GridItemWrapper start={2} end={5} justify="center">
          <h2>Restore Hope Oils</h2>
        </GridItemWrapper>
        <GridItemWrapper start={5} justify="flex-end">
          <p>How are you today?</p>
        </GridItemWrapper>
      </Wrapper>
    </Nav>
  ));
