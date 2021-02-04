import { useRef } from "react";

export default function useScrollTo() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const bonusRef = useRef();

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function scrollToProjects() {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function scrollToContact() {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function scrollToBonus() {
    bonusRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return {
    aboutRef,
    scrollToAbout,
    projectsRef,
    scrollToProjects,
    contactRef,
    scrollToContact,
    bonusRef,
    scrollToBonus,
  };
}
