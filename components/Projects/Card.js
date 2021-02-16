import styled from "styled-components";

function TagsRow({ tags }) {
  return (
    <>
      {tags.map((tag, index) => {
        return <span key={index}>{tag}</span>;
      })}
    </>
  );
}

export default function Card({
  title,
  description,
  tags,
  previewPicture,
  open,
}) {
  return (
    <Wrapper
      onClick={() => {
        if (previewPicture) {
          open();
        } else {
          alert(
            "Projet en cours de publication.. Plus d'information très bientôt"
          );
        }
      }}
    >
      <h3>
        {title}
        <TagsRow tags={tags} />
      </h3>
      <ImageWrapper>
        {previewPicture ? (
          <img src={previewPicture} height="200" width="400" />
        ) : (
          <p>Bientôt disponible...</p>
        )}
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  transition: ease 0.3s;
  & h3 {
    font-size: 15px;
    line-height: 32px;
    margin-bottom: 2px;
    transition: ease 0.3s;
  }
  & h3 span {
    margin-left: 12px;
    font-size: 9px;
    color: #eae1d3;
    background-color: ${(props) => props.theme.main};
    padding: 2px 4px;
  }
  & p {
    line-height: 32px;
    font-size: 15px;
    transition: ease 0.3s;
  }
  &:hover {
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

const ImageWrapper = styled.div`
  background-color: white;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    transition: ease 0.5s;
    width: 85%;
    height: auto;
    display: block;
    box-shadow: 0 8px 24px rgba(163, 86, 57, 0.1);
  }
  &:hover img {
    width: 94%;
  }
`;

/* 
const Wrapper = styled.li`
  padding: 24px 36px;
  // box-shadow: 0 8px 24px rgba(163, 86, 57, 0.1);
  background-color: white;
  // border-radius: 8px;
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
*/
