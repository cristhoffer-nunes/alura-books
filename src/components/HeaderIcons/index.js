import styled from "styled-components";
import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];

function HeaderIcons() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="icone"></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default HeaderIcons;
