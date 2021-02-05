import { useState, useEffect } from "react";
import styled from "styled-components";

import { Transport } from "tone";

export default function Resetter({ globalCurrentStep }) {
  const [globalLength, globalLengthChange] = useState(16);

  useEffect(() => {
    Transport.bpm.value = 80;
    Transport.scheduleRepeat((time) => {
      if (globalCurrentStep.current === globalLength - 1) {
        globalCurrentStep.current = 0;
      } else {
        globalCurrentStep.current++;
      }
    }, "16n");
  });

  return (
    <Wrapper>
      <input
        type="number"
        min={1}
        max={64}
        value={globalLength}
        onChange={(e) => {
          globalLengthChange(Number(e.target.value));
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
