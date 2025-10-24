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
  gap: 0.75rem;
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  background: ${(props) => props.bgcolor || "#ffffff"};
  color: #3c4043;
  border: 2px solid #00F34A;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f8f9fa;
    border-color: #f45142;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(2px);
  }

  .btn {
    cursor: pointer;
  }
`;
