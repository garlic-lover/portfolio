import { useEffect, useRef } from "react";
import styled from "styled-components";
import paper, { Path, Point } from "paper";

export default function Graphic({
  name,
  segmentsAmountRef,
  steps,
  currentStep,
}) {
  const polygon = useRef(null);
  const stepsRef = useRef(steps.current);
  const clockRef = useRef(0);

  useEffect(async () => {
    const canvas = await document.querySelector(`#${name}`);

    paper.setup(canvas);

    let circlesArray = [];

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
      polygon.current = new Path.RegularPolygon(
        new Point(150, 150),
        segmentsAmountRef.current,
        130
      );
      // polygon.current.strokeColor = "tomato";

      // From the segments, create the circles
      for (const { point } of polygon.current.segments) {
        let newCircle = new Path.Circle(point, 10);
        newCircle.strokeColor = "tomato";
        circlesArray.push(newCircle);
      }
      stepsCirclesFill();
      currentStepFill();
    }

    function stepsCirclesFill() {
      let index = 0;
      for (const circle of circlesArray) {
        if (steps.current.indexOf(index) !== -1) {
          circle.fillColor = "lightblue";
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
      console.log(circlesArray.length, currentStep.current);
      stepsCirclesFill();
      circlesArray[currentStep.current].fillColor = "green";
      clockRef.current = currentStep.current;
    }

    polygonGenerate();

    paper.view.onFrame = (ev) => {
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

  return <Wrapper id={name} />;
}

const Wrapper = styled.canvas`
  width: 300px;
  height: 300px;
  border: solid 1px ${(props) => props.theme.background};
  margin: auto;
  display: block;
  z-index: -1;
  margin-bottom: 12px;
`;
