import styled from "styled-components";
import Logo from "../Logo";
import HeaderOptions from "../HeaderOptions";
import HeaderIcons from "../HeaderIcons";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  );
}

export default Header;
