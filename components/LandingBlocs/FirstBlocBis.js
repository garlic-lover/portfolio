import styled from "styled-components";
import CircleType from "circletype";
import { useEffect } from "react";

export default function FirstBloc() {
  useEffect(() => {
    const circleType = new CircleType(document.getElementById("roundedText"));
    circleType.dir();
  }, []);

  return (
    <Wrapper>
      <StickyPart>
        <h1>Matthieu Poupinet</h1>
        <h2>Web & Mobile delopper</h2>
        <p>Lean, transparency, no bullsh*t</p>
      </StickyPart>
      <RoundText id="roundedText"> Contact me · Contact me · </RoundText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(221, 221, 221);
  background: linear-gradient(135deg, #eae1d3 38%, #1687a7 100%);
  position: relative;
  & h1 {
    font-size: 1.5rem;
    margin-bottom: 0px;
  }
  & h2 {
    font-size: 4rem;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${(p) => p.theme.color3};
    margin-bottom: 12px;
  }
  & p {
    text-align: right;
  }
`;

const StickyPart = styled.div`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  background: white;
  padding: 20px 50px;
  border-radius: 100px;
`;

const RoundText = styled.div`
  position: absolute;
  right: 64px;
  bottom: 112px;
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
