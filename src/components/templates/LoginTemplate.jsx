import styled from "styled-components";
import Button from "../../components/molecula/Button";

export default function LoginTemplate() {
    return (
        <Container>
            <div>
                <span> version 1.0.0</span>
                <div>
                    <img src="" alt="" />
                </div>
                <Titulo>Expense Control</Titulo>
                <p style={{ fontSize: "1.5rem" }}>Take control of your expenses</p>
            </div>

            {/* Boton */}
            <ContainerBtn>
                <Button titulo="Login with Google" />
            </ContainerBtn>
        </Container>
    );  
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Titulo = styled.span`
    font-size: 5rem;
    font-weight: 700;
`;

const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
`;