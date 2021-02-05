import { useState, useRef } from "react";
import { Transport } from "tone";

import styled from "styled-components";

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
        <Machine
          theIndex={2}
          initLength={8}
          initStepsAmount={3}
          globalCurrentStep={globalCurrentStep}
        />
      </Wrapper>
      <Resetter globalCurrentStep={globalCurrentStep} />
      <button
        onClick={() => {
          if (Transport.state === "started") {
            Transport.pause();
            isPlayingChange(false);
          } else {
            Transport.start();
            isPlayingChange(true);
          }
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 12px;
`;
