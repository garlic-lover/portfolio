import { useEffect, useRef } from "react";
import styled from "styled-components";
import paper from "paper";
import SimplexNoise from "simplex-noise";

export default function Cursor({ clientX, clientY, stuckX, stuckY, isStuck }) {
  const lastX = useRef(0);
  const lastY = useRef(0);

  // function for linear interpolation of values
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  // function to map a value from one range to another range
  const map = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  useEffect(() => {
    let group, fillOuterCursor;

    const initCanvas = () => {
      const canvas = document.querySelector("#bigCursor");
      const shapeBounds = {
        width: 50,
        height: 50,
      };

      paper.setup(canvas);

      const strokeColor = "#1687a7";
      const strokeWidth = 1;
      const segments = 8;
      const radius = 15;

      // we'll need these later for the noisy circle
      const noiseScale = 150; // speed
      const noiseRange = 4; // range of distortion
      let isNoisy = false; // state

      // the base shape for the noisy circle
      const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
      );
      polygon.strokeColor = strokeColor;
      polygon.strokeWidth = strokeWidth;
      polygon.smooth();
      group = new paper.Group([polygon]);
      group.applyMatrix = false;

      const noiseObjects = polygon.segments.map(() => new SimplexNoise());
      let bigCoordinates = [];

      // the draw loop of Paper.js
      // (60fps with requestAnimationFrame under the hood)
      paper.view.onFrame = (event) => {
        // using linear interpolation, the circle will move 0.2 (20%)
        // of the distance between its current position and the mouse
        // coordinates per Frame
        if (!isStuck.current) {
          // move circle around normally
          lastX.current = lerp(lastX.current, clientX.current, 0.2);
          lastY.current = lerp(lastY.current, clientY.current, 0.2);
          group.position = new paper.Point(lastX.current, lastY.current);
        } else if (isStuck.current) {
          // fixed position on a nav item
          lastX.current = lerp(lastX.current, stuckX.current, 0.2);
          lastY.current = lerp(lastY.current, stuckY.current, 0.2);
          group.position = new paper.Point(lastX.current, lastY.current);
        }

        if (isStuck.current && polygon.bounds.width < shapeBounds.width) {
          // scale up the shape
          polygon.scale(1.08);
        } else if (!isStuck.current && polygon.bounds.width > 30) {
          // remove noise
          if (isNoisy) {
            polygon.segments.forEach((segment, i) => {
              segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
            });
            isNoisy = false;
            bigCoordinates = [];
          }
          // scale down the shape
          const scaleDown = 0.92;
          polygon.scale(scaleDown);
        }
        // while stuck and big, apply simplex noise
        if (isStuck.current && polygon.bounds.width >= shapeBounds.width) {
          isNoisy = true;
          // first get coordinates of large circle
          if (bigCoordinates.length === 0) {
            polygon.segments.forEach((segment, i) => {
              bigCoordinates[i] = [segment.point.x, segment.point.y];
            });
          }

          // loop over all points of the polygon
          polygon.segments.forEach((segment, i) => {
            // get new noise value
            // we divide event.count by noiseScale to get a very smooth value
            const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
            const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);

            // map the noise value to our defined range
            const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
            const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);

            // apply distortion to coordinates
            const newX = bigCoordinates[i][0] + distortionX;
            const newY = bigCoordinates[i][1] + distortionY;

            // set new (noisy) coodrindate of point
            segment.point.set(newX, newY);
          });
        }
        polygon.smooth();
      };
    };

    initCanvas();
  }, []);

  return (
    <>
      <BigCircle id="bigCursor" />
    </>
  );
}

const BigCircle = styled.canvas`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  z-index: 12000;
`;
