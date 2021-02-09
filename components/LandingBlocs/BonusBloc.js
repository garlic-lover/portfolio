import styled from "styled-components";
import TrackVisibility from "react-on-screen";

import dynamic from "next/dynamic";

const Bonus = dynamic(import("../Bonus"), {
  loading: () => <Loader src="/loader.svg" />,
});

import Boop from "../DS/Boop";

export default function BonusBloc({ theRef }) {
  return (
    <Wrapper ref={theRef}>
      <section>
        <h2>
          Un petit bonus : découvrez les rythmes euclidiens{" "}
          <Boop rotation={15}>
            <span className="lnr lnr-question-circle" />
          </Boop>
        </h2>
        <TrackVisibility once>
          {({ isVisible }) => isVisible && <Bonus />}
        </TrackVisibility>
      </section>
    </Wrapper>
  );
}

const Loader = styled.img`
  color: ${(props) => props.theme.background};
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color3};
  color: ${(props) => props.theme.background};
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  z-index: 10;
  & section {
    width: 84%;
    margin: auto;
    padding-top: 60px;
  }
  & h2 {
    font-size: 1.5rem;
    margin-bottom: 48px;
    line-height: 2.2rem;
  }
  & h2 span {
    position: relative;
    top: -3px;
    font-size: 24px;
  }
  @media (max-width: 680px) {
    & h2 {
      font-size: 1.2rem;
    }
    & h2 span {
      font-size: 18px;
    }
  }
`;
