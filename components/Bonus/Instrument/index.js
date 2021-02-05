import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FFT, MembraneSynth, Transport } from "tone";

import Graphic from "./Graphic";

import euclidianArrayGen from "../../../utils/euclidianArrayGen";

export default function Bonus({ name }) {
  const [theAnalyser, theAnalyserChange] = useState(null);

  const [segmentsAmount, segmentsAmountChange] = useState(13);
  const segmentsAmountRef = useRef(13);
  const [stepsAmount, stepsAmountChange] = useState(5);
  const currentStep = useRef(0);

  const steps = useRef([]);

  useEffect(() => {
    steps.current = euclidianArrayGen(segmentsAmount, stepsAmount);
  }, [segmentsAmount, stepsAmount]);

  useEffect(() => {
    // Init the synth
    let analyser = new FFT({ size: 16 });
    const synth = new MembraneSynth({ pitchDecay: 0 })
      .chain(analyser)
      .toDestination();

    theAnalyserChange(analyser);

    Transport.scheduleRepeat((time) => {
      // Increment the current step of the sequencer
      if (currentStep.current === segmentsAmountRef.current - 1) {
        currentStep.current = 0;
      } else {
        currentStep.current++;
      }
      // If the current step is in the sequencer, play it
      if (steps.current.indexOf(currentStep.current) !== -1) {
        // synth.triggerAttackRelease("C3", "2n");
      }
    }, "16n");
  }, []);

  return (
    <Wrapper>
      <Graphic
        name={name}
        segmentsAmountRef={segmentsAmountRef}
        steps={steps}
        currentStep={currentStep}
      />
      <input
        type="number"
        min={2}
        max={20}
        value={segmentsAmount}
        onChange={async (e) => {
          if (Number(e.target.value) === stepsAmount - 1) {
            return;
          }
          if (Number(e.target.value) <= currentStep.current) {
            currentStep.current = 0;
          }
          segmentsAmountChange(Number(e.target.value));
          segmentsAmountRef.current = Number(e.target.value);
        }}
      />
      <input
        type="number"
        min={1}
        max={20}
        value={stepsAmount}
        onChange={async (e) => {
          if (Number(e.target.value) === segmentsAmount + 1) {
            return;
          }
          stepsAmountChange(Number(e.target.value));
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
