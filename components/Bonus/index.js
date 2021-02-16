import { useState, useRef } from "react";
import { Transport } from "tone";

import styled, { keyframes } from "styled-components";

import Machine from "./Machine";
import Resetter from "./Resetter";

export default function Bonus() {
  const [isPlaying, isPlayingChange] = useState(null);
  const globalCurrentStep = useRef(0);

  return (
    <>
      <Wrapper>
        <Machine
          theIndex={0}
          initLength={4}
          initStepsAmount={1}
          globalCurrentStep={globalCurrentStep}
        />
        <Machine
          theIndex={1}
          initLength={6}
          initStepsAmount={2}
          globalCurrentStep={globalCurrentStep}
        />
        {/*  <Machine
          theIndex={2}
          initLength={8}
          initStepsAmount={3}
          globalCurrentStep={globalCurrentStep}
        /> */}
      </Wrapper>
      <BottomBar>
        <Resetter globalCurrentStep={globalCurrentStep} />
        <PlayPause
          onClick={() => {
            if (Transport.state === "started") {
              Transport.pause();
              isPlayingChange(false);
            } else {
              Transport.start();
              isPlayingChange(true);
            }
          }}
          src={isPlaying ? "/svg/pause.svg" : "/svg/play.svg"}
          alt="play/pause icon"
        />
      </BottomBar>
    </>
  );
}

const BonusAppear = keyframes`
  from{
    opacity :0
  }
  to{
    opacity :1
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  margin-bottom: 12px;
  animation: ${BonusAppear} 2s;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayPause = styled.img`
  height: 40px;
  width: 40px;
  filter: invert(99%) sepia(33%) saturate(44%) hue-rotate(182deg)
    brightness(111%) contrast(92%);
`;
