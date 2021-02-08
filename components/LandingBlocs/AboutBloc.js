import styled from "styled-components";

import Prestations from "../About/Prestations";
import SideBlocs from "../About/SideBlocs";

export default function AboutBloc({ theRef, scrollToBonus }) {
  return (
    <Wrapper ref={theRef}>
      <section>
        <Prestations />
        <SideBlocs />
      </section>
      <Bonus>
        <p>Un exemple de mes compétences sur un sujet passion ? </p>
        <p
          onClick={() => {
            scrollToBonus();
          }}
        >
          Par ici
          <span className="lnr lnr-arrow-right" />{" "}
        </p>
      </Bonus>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.color2};
  min-height: calc(100vh - 160px);
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 4;
  & section {
    width: 84%;
    display: flex;
    justify-content: space-between;
  }
  & h2 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 950px) {
    & section {
      flex-direction: column;
    }
    text-align: center;
    padding-bottom: 120px;
  }
`;

const Bonus = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  align-items: center;
  & p {
    line-height: 18px;
  }
  & p:last-child {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.color3};
    margin-left: 4px;
    transition: ease 0.3s;
    width: 74px;
  }
  & p:last-child:hover {
    font-size: 18px;
  }
  & span {
    margin-left: 4px;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    bottom: 20px;
    & p {
      line-height: 24px;
    }
    & p:last-child {
      margin-top: 12px;
    }
  }
`;
