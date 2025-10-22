import styled from "styled-components";
import {Icono} from "./Icono";


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
  background: ${(props) => props.bgcolor || "#ffffff"};
  color: #497548;
  border: none;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontButton};
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);

  &:hover {
    opacity: 0.9;
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(2px);
  }

  .btn {
    cursor: pointer;
  }
`;
