import styled from "styled-components";

export default function Button({ funcion, titulo, bgcolor, icono }) {
  return (
    <ContainerBtn type="submit">
        <span className="icono">{icono}</span>
      <span className="btn" onClick={funcion}>
        {titulo}
      </span>
    </ContainerBtn>
  );
}

const ContainerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  .icono {
    margin-right: 10px;
  }
`;
