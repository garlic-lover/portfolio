import styled from "styled-components";

import FirstBloc from "../components/LandingBlocs/FirstBloc";
import AboutBloc from "../components/LandingBlocs/AboutBloc";
import ContactBloc from "../components/LandingBlocs/ContactBloc";
import ProjectsBloc from "../components/LandingBlocs/ProjectsBloc";
import BonusBloc from "../components/LandingBlocs/BonusBloc";

import Page from "../components/Projects/Page";

import useScrollTo from "@hooks/useScrollTo";

import MenuBar from "../components/MenuBar";
import Cursor from "../components/DS/Cursor";

import Switch from "../components/DS/Switch";
import { useState } from "react";

export default function HomePage() {
  const [value, valueChange] = useState();
  const scroll = useScrollTo();

  return (
    <>
      <Cursor />
      <MenuBar scroll={scroll} />
      <Wrapper>
        <Main isDisplayed={value}>
          <FirstBloc scroll={scroll} />
          <AboutBloc
            theRef={scroll.aboutRef}
            scrollToBonus={scroll.scrollToBonus}
          />
          <ProjectsBloc theRef={scroll.projectsRef} />
          <ContactBloc theRef={scroll.contactRef} />
          <BonusBloc theRef={scroll.bonusRef} />
        </Main>
        <Page isDisplayed={value} />
        <SwitchWrapper>
          <Switch value={value} valueChange={valueChange} />
        </SwitchWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`;

const Main = styled.div`
  transition: ease 1s;
  width: 100vw;
  position: relative;
  left: 0;
  transform: ${(props) => (props.isDisplayed ? "translateX(-100%)" : "")};
`;

const SwitchWrapper = styled.div`
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 100;
`;
