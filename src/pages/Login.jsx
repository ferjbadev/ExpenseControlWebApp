import styled from "styled-components";
import LoginTemplate from "../components/templates/LoginTemplate";

export default function Login() {
    return (
        <Container>
            <LoginTemplate />
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
