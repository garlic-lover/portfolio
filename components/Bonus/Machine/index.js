import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Graphic from "./Graphic";
import Instrument from "./Instrument";

import euclidianArrayGen from "../../../utils/euclidianArrayGen";

export default function Bonus({
  theIndex,
  initLength,
  initStepsAmount,
  globalCurrentStep,
}) {
  const [segmentsAmount, segmentsAmountChange] = useState(initLength);
  const segmentsAmountRef = useRef(initLength);
  const [stepsAmount, stepsAmountChange] = useState(initStepsAmount);
  const currentStep = useRef(0);

  const steps = useRef([]);

  useEffect(() => {
    steps.current = euclidianArrayGen(segmentsAmount, stepsAmount);
  }, [segmentsAmount, stepsAmount]);

  useEffect(() => {
    if (globalCurrentStep.current === 0) {
      currentStep.current = 0;
    }
  }, [globalCurrentStep.current]);

  return (
    <Wrapper>
      <Instrument
        theIndex={theIndex}
        steps={steps}
        currentStep={currentStep}
        segmentsAmountRef={segmentsAmountRef}
      />
      <Graphic
        theIndex={theIndex}
        segmentsAmountRef={segmentsAmountRef}
        steps={steps}
        currentStep={currentStep}
      />
      <Row>
        <div>
          <h5>Q</h5>
          <input
            type="number"
            min={1}
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
        </div>
        <div>
          <h5>R</h5>
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
        </div>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  padding: 16px 24px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.background};
  & select,
  & input {
    color: ${(props) => props.theme.background};
    border-color: ${(props) => props.theme.background};
  }

  & input {
    padding: 4px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  & h5 {
    font-size: 12px;
    margin-bottom: 6px;
  }
  & div:first-child {
    margin-right: 16px;
  }
`;
