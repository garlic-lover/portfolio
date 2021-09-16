import styled from "styled-components";

import FirstBloc from "../components/LandingBlocs/FirstBloc";
import FirstBlocBis from "../components/LandingBlocs/FirstBlocBis";
import AboutBloc from "../components/LandingBlocs/AboutBloc";
import ContactBloc from "../components/LandingBlocs/ContactBloc";
import ProjectsBloc from "../components/LandingBlocs/ProjectsBloc";
//import BonusBloc from "../components/LandingBlocs/BonusBloc";

import Page from "../components/Projects/Page";

import useScrollTo from "@hooks/useScrollTo";
import useAppContext from "@hooks/useAppContext";

import MenuBar from "../components/MenuBar";
import Cursor from "../components/DS/Cursor";

export default function HomePage() {
  const {
    state: { openedPage },
    dispatch,
  } = useAppContext();

  const scroll = useScrollTo();

  function openedPageChange(value) {
    dispatch({ type: "openedPageChange", openedPage: value });
  }

  return (
    <>
      <Cursor />
      <MenuBar scroll={scroll} />
      <Wrapper>
        <Main isDisplayed={openedPage !== null}>
          <FirstBlocBis scroll={scroll} />
          {/* <FirstBloc scroll={scroll} /> */}
          <AboutBloc
            theRef={scroll.aboutRef}
            scrollToBonus={scroll.scrollToBonus}
          />
          <ProjectsBloc
            theRef={scroll.projectsRef}
            openedPageChange={openedPageChange}
          />
          <ContactBloc theRef={scroll.contactRef} />
          {/* <BonusBloc theRef={scroll.bonusRef} /> */}
        </Main>
        <Page isDisplayed={openedPage !== null} />
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
