import { useState, useEffect, useRef } from "react";

import SmallCursor from "./SmallCursor";

import dynamic from "next/dynamic";

const BigCursor = dynamic(import("./BigCursor"));

export default function Cursor() {
  const [isLoaded, isLoadedChange] = useState(false);
  // set the starting position of the cursor outside of the screen
  const clientX = useRef(-100);
  const clientY = useRef(-100);

  const isStuck = useRef(false);
  const stuckX = useRef();
  const stuckY = useRef();

  const showCursor = useRef(false);

  // find the center of the link element and set stuckX and stuckY
  // these are needed to set the position of the noisy circle
  const handleMouseEnter = (e) => {
    const navItem = e.currentTarget;
    const navItemBox = navItem.getBoundingClientRect();
    stuckX.current = Math.round(navItemBox.left + navItemBox.width / 2);
    stuckY.current = Math.round(navItemBox.top + navItemBox.height / 2);
    isStuck.current = true;
  };

  // reset isStuck on mouseLeave
  const handleMouseLeave = () => {
    isStuck.current = false;
  };

  useEffect(() => {
    const linkItems = document.querySelectorAll(".link");

    linkItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      linkItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <SmallCursor
        clientX={clientX}
        clientY={clientY}
        onLoad={() => {
          isLoadedChange(true);
        }}
      />
      {isLoaded && (
        <BigCursor
          clientX={clientX}
          clientY={clientY}
          stuckX={stuckX}
          stuckY={stuckY}
          isStuck={isStuck}
        />
      )}
    </>
  );
}
