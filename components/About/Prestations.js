import styled from "styled-components";

export default function Prestations() {
  return (
    <Bloc>
      <h3>Ce que je fais</h3>
      <p>
        <span>Web app' :</span> Envie de développer des services en ligne ?
        C'est une application web qu'il vous faut.
      </p>
      <p>
        <span>Sites vitrines :</span> besoin d'une première visibilité en ligne
        ?
      </p>
      <p>
        <span>Applications mobiles :</span> Déjà entendu parler des{" "}
        <a
          target="_blank"
          href="https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Introduction"
        >
          PWA
        </a>{" "}
        (Progressive Web App) ? Dans la plupart des cas, elles sont plus que
        suffisantes (et moins coûteuses...) par rapport aux applications
        natives. Sinon, je peux aussi vous faire une application cross-platform
        en React Native.
      </p>
    </Bloc>
  );
}

const Bloc = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  & h3 {
    margin-bottom: 36px;
    font-size: 1.5rem;
    color: ${(props) => props.theme.color3};
  }
  & p {
    margin-bottom: 24px;
    line-height: 36px;
    letter-spacing: 1.5px;
  }
  & span {
    color: ${(props) => props.theme.color3};
    font-size: 17px;
    font-weight: 400;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
`;
