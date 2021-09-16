import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <h1>Matthieu Poupinet · Portfolio@21</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 16px;
  /* left: 50%;
  transform: translateX(-50%); */
  right: 20px;
  font-size: 1.2rem;
  z-index: 200;
  color: ${(p) => p.theme.color3};
`;
