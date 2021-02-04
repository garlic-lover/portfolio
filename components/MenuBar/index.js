import styled from "styled-components";

import OpenedMenu from "./OpenedMenu";

export default function MenuBar({ scroll }) {
  return (
    <Wrapper>
      <OpenedMenu scroll={scroll} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  left: 20px;
  top: 20px;
  z-index: 10;
`;
