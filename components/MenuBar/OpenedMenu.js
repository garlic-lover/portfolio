import styled from "styled-components";

export default function MenuBar({
  scroll: { scrollToAbout, scrollToProjects, scrollToContact, scrollToBonus },
}) {
  return (
    <Wrapper>
      <MenuLine
        className="link"
        onClick={() => {
          scrollToAbout();
        }}
      >
        <Icon className="lnr lnr-user" />
      </MenuLine>
      <MenuLine
        className="link"
        onClick={() => {
          scrollToProjects();
        }}
      >
        <Icon className="lnr lnr-briefcase" />
      </MenuLine>
      {/*  <MenuLine className="link">
        <Icon className="lnr lnr-phone-handset" />
      </MenuLine> */}
      <MenuLine
        className="link"
        onClick={() => {
          scrollToContact();
        }}
      >
        <Icon className="lnr lnr-envelope" />
      </MenuLine>
      <MenuLine
        className="link"
        onClick={() => {
          scrollToBonus();
        }}
      >
        <Icon className="lnr lnr-music-note" />
      </MenuLine>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  z-index: 6;
  transform: translateY(100%);
`;

const MenuLine = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  position: relative;
  &:last-child {
    left: -6px;
  }
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
