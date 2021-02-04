import styled from "styled-components";

export default function MenuBar() {
  return (
    <Wrapper>
      <MenuLine className="link">
        <Icon className="lnr lnr-user" />
      </MenuLine>

      <MenuLine className="link">
        <Icon className="lnr lnr-briefcase" />
      </MenuLine>
      {/*  <MenuLine className="link">
        <Icon className="lnr lnr-phone-handset" />
      </MenuLine> */}
      <MenuLine className="link">
        <Icon className="lnr lnr-envelope" />
      </MenuLine>
      <MenuLine className="link">
        <Icon className="lnr lnr-music-note" />
      </MenuLine>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  margin-left: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 6;
`;

const MenuLine = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  transition: ease 0.5s;
  color: ${(props) => props.theme.main};
  opacity: 0.5;
  font-size: 28px;
  font-weight: 800;
  display: block;
  &:hover {
    opacity: 1;
  }
`;
