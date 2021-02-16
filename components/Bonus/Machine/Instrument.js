import { useState, useEffect, useRef } from "react";
import { FFT, MembraneSynth, Sampler, Transport } from "tone";
import styled from "styled-components";

export default function Instrument({
  theIndex,
  steps,
  currentStep,
  segmentsAmountRef,
}) {
  const [instr, instrChange] = useState(theIndex);
  const synth = useRef();

  function synthMapper() {
    let analyser = new FFT({ size: 16 });

    switch (instr) {
      case 0:
        synth.current = new MembraneSynth({ pitchDecay: 0 })
          .chain(analyser)
          .toDestination();
        break;
      case 1:
        synth.current = new Sampler({
          urls: {
            A1: "Kalimba_2.mp3",
          },
          baseUrl: "https://tonejs.github.io/audio/berklee/",
          onload: () => {
            sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
          },
        })
          .chain(analyser)
          .toDestination();
        break;
      case 2:
        synth.current = new Sampler({
          urls: {
            A1: "Kalimba_2.mp3",
          },
          baseUrl: "https://tonejs.github.io/audio/berklee/",
          onload: () => {
            sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
          },
        })
          .chain(analyser)
          .toDestination();
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    synthMapper();
  }, [instr]);

  useEffect(() => {
    // Launch the sequencer
    Transport.scheduleRepeat((time) => {
      // Increment the current step of the sequencer
      if (currentStep.current === segmentsAmountRef.current - 1) {
        currentStep.current = 0;
      } else {
        currentStep.current++;
      }
      // If the current step is in the sequencer, play it
      if (steps.current.indexOf(currentStep.current) !== -1) {
        synth.current.triggerAttackRelease("C3", "2n");
      }
    }, "16n");
  }, []);
  return (
    <Wrapper>
      <h4>Instrument : </h4>
      <select
        value={instr}
        onChange={(e) => {
          instrChange(Number(e.target.value));
        }}
      >
        <option value={0}>Kick</option>
        <option value={1}>Kalimba</option>
        <option value={2}>Kamimba</option>
      </select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 16px;
  width: 50%;
  & h4 {
    margin-bottom: 8px;
  }
`;
