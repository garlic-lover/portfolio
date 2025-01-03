import styled, { keyframes } from "styled-components";
import CircleType from "circletype";
import { useEffect } from "react";

export default function FirstBloc() {
  useEffect(() => {
    async function circleFormat() {
      const circleType = await new CircleType(
        document.getElementById("roundedText")
      );
      circleType.dir(1);
    }
    circleFormat();
  }, []);

  return (
    <Wrapper>
      <StickyPart>
        <h1>Matthieu Poupinet</h1>
        <h2>Web & Mobile delopper</h2>
        <p>
          Based in Alençon, <strong>Normandy</strong>
        </p>
      </StickyPart>
      <Description>Freelancer working full-remote</Description>
      <RoundText onClick={() => alert("hey")}>
        <p id="roundedText"> Contact me · Contact me · </p>
      </RoundText>
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
    margin-bottom: 6px;
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
    font-size: 1.2rem;
  }
  & strong {
    color: orange;
  }
`;

const StickyPart = styled.div`
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  background: white;
  padding: 20px 60px;
  border-radius: 100px;
`;

const Description = styled.div`
  position: absolute;
  bottom: 24px;
  font-size: 1.4rem;
  line-height: 1.5;
`;

const RotationAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(359deg);
}
`;

const RoundText = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  color: white;
  border-radius: 50%;
  animation: ${RotationAnimation} 16s infinite linear;
  letter-spacing: 2px;
  width: 120px;
  height: 120px;
`;
