import styled from "styled-components";
import LoginTemplate from "../components/templates/LoginTemplate";
import { UserAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { user } = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/home");
        }
    }, [user, navigate]);

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
