import styled from "styled-components";

export default function BonusBloc({ theRef }) {
  return (
    <Wrapper ref={theRef}>
      <h2>Un petit bonus </h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color3};
  color: ${(props) => props.theme.background};
  height: calc(100vh - 160px);
  display: flex;
  position: relative;
  z-index: 10;
  & h2 {
    font-size: 1.5rem;
  }
`;
