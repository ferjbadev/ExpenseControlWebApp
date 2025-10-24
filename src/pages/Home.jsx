import styled from "styled-components";
import { UserAuth } from "../contexts/AuthContext";

export default function Home() {
    const { logout } = UserAuth();

    return (
        <Container>
            <h1>Home</h1>
            <LogoutButton onClick={logout}>Cerrar Sesión</LogoutButton>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 20px;
`;

const LogoutButton = styled.button`
    padding: 12px 24px;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #cc0000;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 68, 68, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
`;
