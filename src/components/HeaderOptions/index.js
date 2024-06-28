import style from "styled-components";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
const Opcoes = style.ul`
    display: flex;
`;

const Opcao = style.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`;

function HeaderOptions() {
  return (
    <Opcoes>
      {" "}
      {textoOpcoes.map((texto) => (
        <Opcao className="opcao">
          {" "}
          <p> {texto}</p>{" "}
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default HeaderOptions;
