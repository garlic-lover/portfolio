import styled from "styled-components";

import Bonus from "../Bonus";
import Boop from "../DS/Boop";

export default function BonusBloc({ theRef }) {
  return (
    <Wrapper ref={theRef}>
      <section>
        <h2>
          Un petit bonus : découvrez les séquenceurs euclidiens{" "}
          <Boop rotation={15}>
            <span className="lnr lnr-question-circle" />
          </Boop>
        </h2>
        <Bonus />
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color3};
  color: ${(props) => props.theme.background};
  height: calc(100vh - 160px);
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
`;
