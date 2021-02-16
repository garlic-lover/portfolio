import { useEffect, useRef } from "react";
import styled from "styled-components";
import paper, { Path, Point } from "paper";

export default function Graphic({
  theIndex,
  segmentsAmountRef,
  steps,
  currentStep,
}) {
  const polygon = useRef(null);
  const stepsRef = useRef(steps.current);
  const clockRef = useRef(0);
  const scopeRef = useRef(null);

  useEffect(async () => {
    const scope = new paper.PaperScope();

    scopeRef.current = scope;

    let circlesArray = [];
    const canvas = await document.querySelector(`#canva${theIndex}`);
    scopeRef.current.setup(canvas);

    function polygonGenerate() {
      // Clear the polygon and circles
      if (polygon.current) {
        polygon.current.removeSegments();
      }
      for (const circle of circlesArray) {
        circle.removeSegments();
      }
      circlesArray = [];

      // Creates the regulate polygon
      polygon.current = new scopeRef.current.Path.RegularPolygon(
        new Point(120, 120),
        segmentsAmountRef.current,
        90
      );
      // polygon.current.strokeColor = "#624E39";

      // From the segments, create the circles
      for (const { point } of polygon.current.segments) {
        let newCircle = new scopeRef.current.Path.Circle(point, 10);
        newCircle.strokeColor = "#624E39";
        circlesArray.push(newCircle);
      }
      stepsCirclesFill();
      currentStepFill();
    }

    function stepsCirclesFill() {
      let index = 0;
      for (const circle of circlesArray) {
        if (steps.current.indexOf(index) !== -1) {
          circle.fillColor = "#624E39";
        } else {
          circle.fillColor = "transparent";
        }
        index++;
      }
      if (stepsRef.current !== steps.current) {
        stepsRef.current = steps.current;
      }
    }

    function currentStepFill() {
      stepsCirclesFill();
      circlesArray[currentStep.current].fillColor = "green";
      clockRef.current = currentStep.current;
    }

    polygonGenerate();

    scopeRef.current.view.onFrame = (ev) => {
      // Resize the polygon if necessary
      if (segmentsAmountRef.current !== polygon.current.segments.length) {
        polygonGenerate();
      }
      // Place the colors in the active steps
      if (stepsRef.current !== steps.current) {
        stepsCirclesFill();
      }
      // Color the current step
      if (clockRef.current !== currentStep.current) {
        currentStepFill();
      }
      // polygon.current.rotate(1);
    };
  }, []);

  return <Wrapper id={`canva${theIndex}`} />;
}

const Wrapper = styled.canvas`
  width: 240px;
  height: 240px;
  //background-color: rgba(255, 255, 255, 0.15);
  border-radius: 7px;
  margin: auto;
  display: block;
  z-index: -1;
  margin-bottom: 12px;
`;
