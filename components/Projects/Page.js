import styled from "styled-components";

export default function ProjectPage({ isDisplayed }) {
  return <Wrapper isDisplayed={isDisplayed}></Wrapper>;
}

const Wrapper = styled.div`
  transition: ease 1s;
  background-color: lightblue;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${(props) => (props.isDisplayed ? "" : "translate(100%)")};
`;
