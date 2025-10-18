import styled from "styled-components";

export default function HomeTemplate() {
    return (
        <Container>
            <h1>Home Template</h1>
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