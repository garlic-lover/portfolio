import styled from "styled-components";
import paper, { Path, Point } from "paper";
import { useEffect, useRef } from "react";

function randomDirection() {
  return {};
}

export default function Graphic({ theAnalyser }) {
  const direction = useRef(0);
  const speed = useRef(0);

  useEffect(async () => {
    const canvas = await document.querySelector("#graphic");

    paper.setup(canvas);

    var path = new Path.Circle({
      center: [80, 50],
      radius: 35,
      fillColor: "red",
    });

    paper.view.onFrame = (ev) => {};
  }, []);

  return <Wrapper id="graphic" />;
}

const Wrapper = styled.canvas`
  width: 300px;
  height: 300px;
  border: solid 1px ${(props) => props.theme.background};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

/* 

 var path = new Path();
    path.strokeColor = "black";
    path.add(new Point(30, 75));
    path.add(new Point(30, 25));
    path.add(new Point(80, 25));
    path.add(new Point(80, 75));
    path.closed = true;

    // Select the path, so we can see its handles:
    //path.fullySelected = true;

    // Create a copy of the path and move it 100pt to the right:
    var copy = path.clone();
    // copy.fullySelected = true;
    copy.position.x += 100;

    path.smooth({ type: "geometric", factor: 0.2 });

    path.fillColor = "red";

*/
