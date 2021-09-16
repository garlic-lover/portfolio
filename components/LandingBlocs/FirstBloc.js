import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

import useWindowSize from "../../hooks/useWindowSize";

export default function FirstBloc({
  scroll: { scrollToAbout, scrollToProjects, scrollToContact, scrollToBonus },
}) {
  const [isImageLoaded, isImageLoadedChange] = useState(false);
  const { width } = useWindowSize();

  return (
    <>
      <Wrapper />
      <TrueBloc>
        <ImageWrapper>
          <Image
            layout="fill"
            src="/images/programmer.jpg"
            alt="Programmation"
            onLoad={() => {
              isImageLoadedChange(true);
            }}
          />
        </ImageWrapper>
        {(isImageLoaded || width < 680) && (
          <Title>
            <h1>Mon portfolio</h1>
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
                Projets
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
        )}
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
  z-index: 2;
  @media (max-width: 680px) {
    flex-direction: column;
    width: 94%;
  }
`;

const Title = styled.div`
  animation: ${Appear} 3s;
  position: sticky;
  top: 50%;
  margin-bottom: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  & h1 {
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.3;
    letter-spacing: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    font-family: Ranade-Variable;
    border-bottom: solid 1px #1687a7;
    padding-bottom: 12px;
    width: fit-content;
  }
  @media (max-width: 680px) {
    font-size: 1.8rem;
    line-height: 3rem;
    margin-bottom: -176px;
    width: 100%;
    & h1 {
      text-align: center;
      font-size: 1.6rem;
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
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
    width: 100%;
    margin-top: 24px;
    & p {
      margin-left: 0;
      margin-bottom: 16px;
      width: 100%;
      font-size: 18px;
    }
    & p:last-child {
      margin-bottom: 32px;
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
  @media (max-width: 680px) {
    display: none;
  }
`;

/* 

  color: #1687a7;
  background-color: #f0e5d8;

*/
