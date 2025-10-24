import styled, { keyframes } from "styled-components";

export default function Loading() {
    return (
        <Container>
            <LoadingWrapper>
                <Spinner />
                <Text>Loading...</Text>
            </LoadingWrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
`;

const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const pulse = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
`;

const Spinner = styled.div`
    width: 60px;
    height: 60px;
    border: 4px solid rgba(5, 152, 34, 0.1);
    border-top: 4px solid rgba(5, 152, 34, 0.8);
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    box-shadow: 0 0 20px rgba(5, 152, 34, 0.3);
`;

const Text = styled.p`
    color: rgba(255, 255, 255, 0.87);
    font-size: 1.2rem;
    font-weight: 500;
    animation: ${pulse} 1.5s ease-in-out infinite;
    letter-spacing: 1px;
`;
