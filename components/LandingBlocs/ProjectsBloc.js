import styled from "styled-components";

import Card from "../Projects/Card";

const data = [
  {
    title: "Hello Golf",
    description:
      "Consectetur consectetur voluptate dolor quis proident do ex. Est incididunt minim ea sit ea occaecat culpa commodo ut nulla. Anim tempor anim reprehenderit elit tempor culpa Lorem. Est culpa consequat minim labore magna quis. Esse non quis nisi laborum do minim consectetur velit anim veniam Lorem fugiat duis tempor. Sunt anim est culpa pariatur nostrud nulla laboris. Aute ipsum nisi mollit commodo labore proident cupidatat amet.",
    tags: ["E-commerce", "Web"],
    previewPicture: "/images/golf_1.png",
  },
  {
    title: "Insectivora",
    description:
      "Consectetur consectetur voluptate dolor quis proident do ex. Est incididunt minim ea sit ea occaecat culpa commodo ut nulla. Anim tempor anim reprehenderit elit tempor culpa Lorem. Est culpa consequat minim labore magna quis. Esse non quis nisi laborum do minim consectetur velit anim veniam Lorem fugiat duis tempor. Sunt anim est culpa pariatur nostrud nulla laboris. Aute ipsum nisi mollit commodo labore proident cupidatat amet.",
    tags: ["Association", "Web"],
    previewPicture: "/images/insectos_1.png",
  },
  {
    title: "DropTeam",
    description:
      "Consectetur consectetur voluptate dolor quis proident do ex. Est incididunt minim ea sit ea occaecat culpa commodo ut nulla. Anim tempor anim reprehenderit elit tempor culpa Lorem. Est culpa consequat minim labore magna quis. Esse non quis nisi laborum do minim consectetur velit anim veniam Lorem fugiat duis tempor. Sunt anim est culpa pariatur nostrud nulla laboris. Aute ipsum nisi mollit commodo labore proident cupidatat amet.",
    tags: ["Luxe", "PWA", "Iphone/Ipad"],
    previewPicture: "/images/color_1.png",
  },
  {
    title: "[...]",
    description:
      "Consectetur consectetur voluptate dolor quis proident do ex. Est incididunt minim ea sit ea occaecat culpa commodo ut nulla. Anim tempor anim reprehenderit elit tempor culpa Lorem. Est culpa consequat minim labore magna quis. Esse non quis nisi laborum do minim consectetur velit anim veniam Lorem fugiat duis tempor. Sunt anim est culpa pariatur nostrud nulla laboris. Aute ipsum nisi mollit commodo labore proident cupidatat amet.",
    tags: ["Enseignement", "Application", "IOS/Android"],
  },
];

export default function FirstBloc({ theRef, openedPageChange }) {
  return (
    <Wrapper ref={theRef}>
      <h2>Selected projects</h2>
      <List>
        {data.map(({ title, description, tags, previewPicture }, index) => {
          return (
            <Card
              key={index}
              title={title}
              description={description}
              tags={tags}
              previewPicture={previewPicture}
              open={() => {
                openedPageChange({ title, description, tags, previewPicture });
              }}
            />
          );
        })}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4;
  & h2 {
    font-size: 1.5rem;
    margin-bottom: 40px;
    width: 94%;
    max-width: 1000px;
  }
`;

const List = styled.ul`
  width: 94%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 24px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  }
`;
