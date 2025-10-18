import styled from "styled-components";

export default function Button() {
    return (
        <ContainerBtn>
            <button>Enter</button>
        </ContainerBtn>
    );
}

const ContainerBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    text-decoration: none;
`;
