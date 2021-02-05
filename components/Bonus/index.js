import { useState } from "react";
import { Transport } from "tone";

import styled from "styled-components";

import Instrument from "./Instrument";

export default function Bonus() {
  const [isPlaying, isPlayingChange] = useState(null);

  return (
    <>
      <Wrapper>
        <Instrument name="instr1" />
        <Instrument name="instr2" />
        <Instrument name="instr3" />
      </Wrapper>
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
  justify-content: space-between;
  margin-bottom: 12px;
`;
