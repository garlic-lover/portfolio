import styled from "styled-components";

import Card from "../Projects/Card";

const data = [
  {
    title: "Project 1",
    description:
      "Consectetur consectetur voluptate dolor quis proident do ex. Est incididunt minim ea sit ea occaecat culpa commodo ut nulla. Anim tempor anim reprehenderit elit tempor culpa Lorem. Est culpa consequat minim labore magna quis. Esse non quis nisi laborum do minim consectetur velit anim veniam Lorem fugiat duis tempor. Sunt anim est culpa pariatur nostrud nulla laboris. Aute ipsum nisi mollit commodo labore proident cupidatat amet.",
  },
  {
    title: "Project 2",
    description:
      "Consectetur consectetur voluptate dolor quis proident do ex. Est incididunt minim ea sit ea occaecat culpa commodo ut nulla. Anim tempor anim reprehenderit elit tempor culpa Lorem. Est culpa consequat minim labore magna quis. Esse non quis nisi laborum do minim consectetur velit anim veniam Lorem fugiat duis tempor. Sunt anim est culpa pariatur nostrud nulla laboris. Aute ipsum nisi mollit commodo labore proident cupidatat amet.",
  },
  {
    title: "Project 3",
    description:
      "Consectetur consectetur voluptate dolor quis proident do ex. Est incididunt minim ea sit ea occaecat culpa commodo ut nulla. Anim tempor anim reprehenderit elit tempor culpa Lorem. Est culpa consequat minim labore magna quis. Esse non quis nisi laborum do minim consectetur velit anim veniam Lorem fugiat duis tempor. Sunt anim est culpa pariatur nostrud nulla laboris. Aute ipsum nisi mollit commodo labore proident cupidatat amet.",
  },
];

export default function FirstBloc({ theRef }) {
  return (
    <Wrapper ref={theRef}>
      <h2>What i did</h2>
      <List>
        {data.map(({ title, description }, index) => {
          return <Card key={index} title={title} description={description} />;
        })}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4;
  & h2 {
    font-size: 1.5rem;
    margin-bottom: 60px;
  }
`;

const List = styled.ul`
  width: 94%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 16px;
`;
