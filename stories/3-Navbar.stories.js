import React from "react";
import { storiesOf } from "@storybook/react";
import Nav from "../components/Nav";
import styled from "@emotion/styled";
import {
  CartLogo,
  LavenderToBlueCartIcon,
  LavenderToBlueIcon,
  Logo
} from "../components/common/icons";
import {
  lavenderToBlue,
  seafoam,
  lavender,
  blue
} from "../components/common/style-constants";

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

const GridItemWrapperTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  grid-column-start: ${({ start }) => start};
  grid-column-end: ${({ end }) => end};
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
`;

storiesOf("Navbar", () => module)
  .add("seafoam background and gradient icons", () => (
    <Nav background={seafoam}>
      <Wrapper>
        <GridItemWrapperTwo start={1} justify="flex-start">
          <LavenderToBlueIcon size="4rem" />
        </GridItemWrapperTwo>
        <GridItemWrapperTwo start={2} end={5} justify="center">
          <h2 style={{ fontSize: "2rem", margin: 0, color: lavender }}>
            Restore Hope Oils
          </h2>
        </GridItemWrapperTwo>
        <GridItemWrapperTwo start={5} justify="flex-end">
          <LavenderToBlueCartIcon size="3rem" />
        </GridItemWrapperTwo>
      </Wrapper>
    </Nav>
  ))
  .add("lavender to blue with white logos", () => (
    <div style={{ height: "100vh", border: "1px dotted black" }}>
      <Nav background={lavenderToBlue}>
        <Wrapper>
          <GridItemWrapper start={1} justify="flex-start">
            <Logo size="4rem" color="white" />
          </GridItemWrapper>
          <GridItemWrapper start={2} end={5} justify="center">
            <h2 style={{ fontSize: "2rem", margin: 0 }}>Restore Hope Oils</h2>
          </GridItemWrapper>
          <GridItemWrapper start={5} justify="flex-end">
            <CartLogo size="3rem" color="white" />
          </GridItemWrapper>
        </Wrapper>
      </Nav>
      <p>Here is some random stuff on the page</p>
    </div>
  ))
  .add("lavender to blue with seafoam logos", () => (
    <div style={{ height: "100vh", border: "1px dotted black" }}>
      <Nav background={lavenderToBlue}>
        <Wrapper>
          <GridItemWrapperTwo start={1} justify="flex-start">
            <Logo size="4rem" color={seafoam} />
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={2} end={5} justify="center">
            <h2 style={{ fontSize: "2rem", margin: 0, color: seafoam }}>
              Restore Hope Oils
            </h2>
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={5} justify="flex-end">
            <CartLogo size="3rem" color={seafoam} />
          </GridItemWrapperTwo>
        </Wrapper>
      </Nav>
      <p>Here is some random stuff on the page</p>
    </div>
  ))
  .add("White background", () => (
    <div style={{ height: "100vh", border: "1px dotted black" }}>
      <Nav background="white">
        <Wrapper>
          <GridItemWrapperTwo start={1} justify="flex-start">
            <Logo size="4rem" />
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={2} end={5} justify="center">
            <h2 style={{ fontSize: "2rem", margin: 0, color: "black" }}>
              Restore Hope Oils
            </h2>
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={5} justify="flex-end">
            <CartLogo size="3rem" />
          </GridItemWrapperTwo>
        </Wrapper>
      </Nav>
      <p>Here is some random stuff on the page</p>
    </div>
  ))
  .add("White background with seafoam", () => (
    <div style={{ height: "100vh", border: "1px dotted black" }}>
      <Nav background="white">
        <Wrapper>
          <GridItemWrapperTwo start={1} justify="flex-start">
            <Logo size="4rem" color={seafoam} />
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={2} end={5} justify="center">
            <h2 style={{ fontSize: "2rem", margin: 0, color: seafoam }}>
              Restore Hope Oils
            </h2>
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={5} justify="flex-end">
            <CartLogo size="3rem" color={seafoam} />
          </GridItemWrapperTwo>
        </Wrapper>
      </Nav>
      <p>Here is some random stuff on the page</p>
    </div>
  ))
  .add("White background with lavender", () => (
    <div style={{ height: "100vh", border: "1px dotted black" }}>
      <Nav background="white">
        <Wrapper>
          <GridItemWrapperTwo start={1} justify="flex-start">
            <Logo size="4rem" color={lavender} />
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={2} end={5} justify="center">
            <h2 style={{ fontSize: "2rem", margin: 0, color: lavender }}>
              Restore Hope Oils
            </h2>
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={5} justify="flex-end">
            <CartLogo size="3rem" color={lavender} />
          </GridItemWrapperTwo>
        </Wrapper>
      </Nav>
      <p>Here is some random stuff on the page</p>
    </div>
  ))
  .add("White background with blue", () => (
    <div style={{ height: "100vh", border: "1px dotted black" }}>
      <Nav background="white">
        <Wrapper>
          <GridItemWrapperTwo start={1} justify="flex-start">
            <Logo size="4rem" color={blue} />
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={2} end={5} justify="center">
            <h2 style={{ fontSize: "2rem", margin: 0, color: blue }}>
              Restore Hope Oils
            </h2>
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={5} justify="flex-end">
            <CartLogo size="3rem" color={blue} />
          </GridItemWrapperTwo>
        </Wrapper>
      </Nav>
      <p>Here is some random stuff on the page</p>
    </div>
  ))
  .add("White background with gradient", () => (
    <div style={{ height: "100vh", border: "1px dotted black" }}>
      <Nav background="white">
        <Wrapper>
          <GridItemWrapperTwo start={1} justify="flex-start">
            <LavenderToBlueIcon size="4rem" />
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={2} end={5} justify="center">
            <h2
              style={{
                fontSize: "2rem",
                margin: 0,
                background: lavenderToBlue
              }}
            >
              Restore Hope Oils
            </h2>
          </GridItemWrapperTwo>
          <GridItemWrapperTwo start={5} justify="flex-end">
            <LavenderToBlueCartIcon size="3rem" />
          </GridItemWrapperTwo>
        </Wrapper>
      </Nav>
      <p>Here is some random stuff on the page</p>
    </div>
  ));
