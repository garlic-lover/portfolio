import { FFT, Clock, MembraneSynth } from "tone";
import styled from "styled-components";
import { useState, useEffect } from "react";

import Graphic from "./Graphic";

export default function Bonus() {
  const [theClock, theClockChange] = useState(null);
  const [isPlaying, isPlayingChange] = useState(false);
  const [theSynth, theSynthChange] = useState(null);
  const [theAnalyser, theAnalyserChange] = useState(null);

  useEffect(() => {
    if (theSynth) {
      // Launch the clock
      const clock = new Clock((time) => {
        playSound();
      }, 2);
      theClockChange(clock);
    }
  }, [theSynth]);

  useEffect(() => {
    // Init the synth
    let analyser = new FFT({ size: 16 });
    const synth = new MembraneSynth({ pitchDecay: 0 })
      .chain(analyser)
      .toDestination();
    theSynthChange(synth);
    theAnalyserChange(analyser);
  }, []);

  function playSound() {
    //play a middle 'C' for the duration of an 8th note
    theSynth.triggerAttackRelease("C2", "2n");
  }

  return (
    <Wrapper>
      {theAnalyser && <Graphic theAnalyser={theAnalyser} />}
      <button
        onClick={() => {
          if (theClock.state === "started") {
            isPlayingChange(false);
            theClock.pause();
          } else {
            theClock.start();
            isPlayingChange(true);
          }
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
