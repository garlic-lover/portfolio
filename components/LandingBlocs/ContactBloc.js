import styled from "styled-components";
import TrackVisibility from "react-on-screen";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../Contact"), {
  ssr: false,
  loading: () => <Loader>Loading...</Loader>,
});

export default function ThirdPage({ theRef }) {
  return (
    <Wrapper ref={theRef}>
      <section>
        <TrackVisibility once offset={400}>
          {({ isVisible }) => isVisible && <Contact />}
        </TrackVisibility>
      </section>
    </Wrapper>
  );
}

const Loader = styled.p`
  color: ${(props) => props.theme.background};
  font-size: 1.5rem;
  text-align: center;
  margin-top: 3rem;
`;

const Wrapper = styled.div`
  color: ${(props) => props.theme.main};
  background-color: #eae1d3;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4;
  & section {
    width: 94%;
    max-width: 600px;
  }
`;
