import styled from "styled-components";
import {Icono} from "../atomos/Icono";


export default function Button({ funcion, titulo, bgcolor, icono }) {
  return (
    <ContainerBtn type="submit" bgcolor={bgcolor}>
        <Icono>{icono}</Icono>
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
  gap: 0.5rem;
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  background: ${(props) => props.bgcolor || props.theme.bg5};
  color: ${(props) => props.theme.text};
  border: none;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontButton};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    transform: translateY(-5px);
  }

  .btn {
    cursor: pointer;
  }
`;
