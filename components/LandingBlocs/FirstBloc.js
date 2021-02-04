import styled, { keyframes } from "styled-components";
import Image from "next/image";

export default function FirstBloc({
  scroll: { scrollToAbout, scrollToProjects, scrollToContact, scrollToBonus },
}) {
  return (
    <>
      <Wrapper />
      <TrueBloc>
        <ImageWrapper>
          <Image
            layout="fill"
            src="/images/programmer.jpg"
            alt="Programmation"
          />
        </ImageWrapper>
        <Title>
          <h1>Matthieu Poupinet</h1>
          <Row>
            <p
              onClick={() => {
                scrollToAbout();
              }}
            >
              A propos
            </p>
            <p
              onClick={() => {
                scrollToProjects();
              }}
            >
              Projects
            </p>
            <p
              onClick={() => {
                scrollToContact();
              }}
            >
              Contact
            </p>
            <p
              onClick={() => {
                scrollToBonus();
              }}
            >
              Bonus
            </p>
          </Row>
        </Title>
      </TrueBloc>
    </>
  );
}

const Appear = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const TrueBloc = styled.div`
  height: 100vh;
  width: calc(100% - 160px);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  // flex-direction: column;
  z-index: 2;
`;

const Title = styled.div`
  animation: ${Appear} 3s;
  position: sticky;
  top: 50%;
  margin-bottom: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  width: 40%;
  & h1 {
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 6px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }
  @media (max-width: 680px) {
    font-size: 1.8rem;
    line-height: 3rem;
    margin-bottom: -176px;
    & h1 {
      text-align: center;
      font-size: 1.6rem;
      width: 90%;
    }
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 2px;
  & p {
    transition: ease 0.3s;
    margin-left: 24px;
    color: ${(props) => props.theme.main};
    opacity: 0.6;
    line-height: 18px;
    width: 84px;
    text-align: center;
  }
  & p:first-child {
    margin-left: 0px;
  }
  & p:hover {
    color: ${(props) => props.theme.main};
    opacity: 1;
    font-size: 18px;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: 24px;
    & a {
      margin-left: 0;
      margin-bottom: 32px;
      width: 100%;
      font-size: 18px;
    }
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  /*  position: absolute;
  top: 0;
  top: 50%;
  left: 80px; */
  margin-left: 00px;
  height: 90%;
  width: 50%;
  position: relative;
  & img {
    object-fit: cover;
    animation: ${Appear} 3s;
  }
`;

/* 

  color: #1687a7;
  background-color: #f0e5d8;

*/
