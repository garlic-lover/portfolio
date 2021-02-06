import { useEffect } from "react";
import styled from "styled-components";

export default function SmallCursor({ onLoad, clientX, clientY }) {
  const handleMouseMove = (e) => {
    clientX.current = e.clientX;
    clientY.current = e.clientY;
  };

  useEffect(() => {
    const innerCursor = document.querySelector("#smallCursor");
    // add listener to track the current mouse position
    document.addEventListener("mousemove", handleMouseMove);

    const initCursor = () => {
      // transform the innerCursor to the current mouse position
      // use requestAnimationFrame() for smooth performance
      const render = () => {
        innerCursor.style.transform = `translate(${clientX.current}px, ${clientY.current}px)`;
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };
    initCursor();
    onLoad();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <SmallCircle id="smallCursor" />
    </>
  );
}

const SmallCircle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 5px;
  height: 5px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  z-index: 11000;
  background: ${(props) => props.theme.main};
`;
