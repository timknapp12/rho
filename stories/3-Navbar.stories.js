import React from "react";
import { storiesOf } from "@storybook/react";
import Nav from "../components/Nav";
import styled from "@emotion/styled";
import { WhiteLogo, WhiteCart } from "../components/common/icons";
import { lavenderToBlue, seafoam } from "../components/common/style-constants";

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
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

storiesOf("Navbar", () => module)
  .add("default", () => (
    <Nav background={seafoam}>
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
    <Nav background={lavenderToBlue}>
      <Wrapper>
        <GridItemWrapper start={1} justify="flex-start">
          <WhiteLogo size="4rem" />
        </GridItemWrapper>
        <GridItemWrapper start={2} end={5} justify="center">
          <h2 style={{ fontSize: "2rem", margin: 0 }}>Restore Hope Oils</h2>
        </GridItemWrapper>
        <GridItemWrapper start={5} justify="flex-end">
          <WhiteCart size="3rem" />
        </GridItemWrapper>
      </Wrapper>
    </Nav>
  ));
