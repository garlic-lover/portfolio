import styled from "styled-components";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../Contact"), {
  ssr: false,
});

export default function ThirdPage({ theRef }) {
  return (
    <Wrapper ref={theRef}>
      <section>
        <Contact />
      </section>
    </Wrapper>
  );
}

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
