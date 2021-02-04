import styled from "styled-components";

import Boop from "../DS/Boop";

export default function Side() {
  return (
    <SideBlocs>
      <Bloc>
        <h3>Formation</h3>
        <ImageRow>
          <Boop>
            <a
              target="_blank"
              href="https://sciencespo-rennes-pro.fr/grade-master-mrq-management-des-risques-et-de-la-qualite/"
            >
              <img
                src="/images/sciences_po_rennes.png"
                alt="Sciences Po Rennes, parcours management "
              />
            </a>
          </Boop>
          <Boop>
            <a
              target="_blank"
              href="https://exed.centralesupelec.fr/formation/mastere-specialise-technologie-et-management-2/"
            >
              <img
                src="/images/centrale.svg"
                alt="Centrale-Supélec, master spécialisé technologie et management"
              />
            </a>
          </Boop>
          <Boop>
            <a target="_blank" href="https://www.lereacteur.io/">
              <img
                src="/images/reacteur.svg"
                alt="Le Reacteur, bootcamp de code fullstack js, React, React Nattive et Node"
              />
            </a>
          </Boop>
        </ImageRow>
      </Bloc>
      <Bloc>
        <h3>Compétences</h3>
        <p>
          Développeur Web et Mobile <span>fullstack</span>, je me suis
          spécialisé notamment sur les technologies autour des environnements de
          <span> React</span> et <span>GraphQl</span>.
        </p>
        <p>
          <span>MERNstack :</span> MongoDB, Express, React, Node.
        </p>
        <p>
          <span>GRANDstack :</span> GraphQl, React, Apollo, Neo4j.
        </p>
      </Bloc>
    </SideBlocs>
  );
}

const SideBlocs = styled.div`
  width: 40%;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const Bloc = styled.div`
  display: flex;
  flex-direction: column;
  // border: solid 1px;
  width: ${(props) => (props.isBig ? "45%" : "100%")};
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
`;

const ImageRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  & img {
    display: block;
    margin: auto;
    height: 60px;
    width: auto;
    display: block;
    margin-bottom: 48px;
  }
  & a:last-child img {
    height: 50px;
    margin-top: 5px;
  }
`;
