import styled from "styled-components";

export default function LoginTemplate() {
    return (
        <Container>
            <h1>Login Template</h1>
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
