import styled from "styled-components";

export default function Card({ title, description }) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>{description}</p>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  padding: 24px 36px;
  box-shadow: 0 8px 24px rgba(163, 86, 57, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: ease 0.3s;
  & h3 {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 28px;
    transition: ease 0.3s;
  }
  & p {
    line-height: 32px;
    font-size: 15px;
    transition: ease 0.3s;
  }
  &:hover {
    box-shadow: 0 8px 48px rgba(163, 86, 57, 0.25);
  }
  @media (max-width: 680px) {
    & h3 {
      text-align: center;
      margin-bottom: 24px;
    }
    & p {
    }
  }
`;
