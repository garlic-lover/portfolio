import FirstBloc from "../components/LandingBlocs/FirstBloc";
import AboutBloc from "../components/LandingBlocs/AboutBloc";
import ContactBloc from "../components/LandingBlocs/ContactBloc";
import ProjectsBloc from "../components/LandingBlocs/ProjectsBloc";
import BonusBloc from "../components/LandingBlocs/BonusBloc";

import useScrollTo from "@hooks/useScrollTo";

import MenuBar from "../components/MenuBar";

export default function HomePage() {
  const scroll = useScrollTo();

  return (
    <>
      <MenuBar scroll={scroll} />
      <div>
        <FirstBloc scroll={scroll} />
        <AboutBloc
          theRef={scroll.aboutRef}
          scrollToBonus={scroll.scrollToBonus}
        />
        <ProjectsBloc theRef={scroll.projectsRef} />
        <ContactBloc theRef={scroll.contactRef} />
        <BonusBloc theRef={scroll.bonusRef} />
      </div>
    </>
  );
}
