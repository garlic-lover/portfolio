import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <div>
        <h3>Inspirations</h3>
        <p>
          Curseur : Stefan Kaltenegger (
          <a href="https://github.com/skaltenegger/customcursor">
            https://github.com/skaltenegger/customcursor
          </a>
          )
        </p>
        <p>
          Animation d'icônes : Josh Comeau (
          <a href="https://www.joshwcomeau.com/react/boop/?utm_campaign=sebastien_lorber_newsletter&utm_medium=email&utm_source=Revue%20newsletter">
            https://www.joshwcomeau.com/react/boop/
          </a>
          )
        </p>
      </div>
      <div>
        <h3>Packages utilisés</h3>
        <p>Paper.js</p>
        <p>simplex-noise.js</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  & h3 {
    margin-bottom: 12px;
  }
  & p {
    margin-bottom: 4px;
    line-height: 24px;
    overflow-wrap: break-word;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    padding: 30px 10px;
    & div:first-child {
      margin-bottom: 32px;
    }
    & p {
      font-size: 14px;
    }
  }
`;
