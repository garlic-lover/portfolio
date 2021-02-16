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
      <Top>
        <Instrument
          theIndex={theIndex}
          steps={steps}
          currentStep={currentStep}
          segmentsAmountRef={segmentsAmountRef}
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
      </Top>
      <Graphic
        theIndex={theIndex}
        segmentsAmountRef={segmentsAmountRef}
        steps={steps}
        currentStep={currentStep}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: solid 1px ${(props) => props.theme.background};
  color: ${(props) => props.theme.background};
  margin-bottom: 12px;
  & select,
  & input {
    color: ${(props) => props.theme.background};
    border-color: ${(props) => props.theme.background};
  }
  & input {
    padding: 4px;
  }
  @media (max-width: 680px) {
    margin-bottom: 30px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  & h5 {
    font-size: 12px;
    margin-bottom: 8px;
  }
  & div:first-child {
    margin-right: 16px;
  }
`;
