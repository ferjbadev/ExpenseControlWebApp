import styled from "styled-components";
import Button from "../atomos/Button";
import {v as V} from "../../styles/variables";

export default function LoginTemplate() {
    return (
        <Container imgFondo={V.imagenfondo}>
            <div className="contentCard">
                <span className="version"> version 1.0.0</span>
                <div>
                    <img src="" alt="" />
                </div>
                <Titulo>Expense Control</Titulo>
                <p style={{ fontSize: "1.5rem" }}>Take control of your expenses</p>

            {/* Boton */}
            <ContainerBtn>
                <Button titulo="Login with Google"  icono={<V.iconogoogle/>} ></Button>
            </ContainerBtn>
            </div>
        </Container>
    );  
}

const Container = styled.div`
    background-image: url(${props => props.imgFondo});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.87);
    text-align: center;

    .contentCard {
        background-color: #131313;
        border-radius: 20px;
        gap: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        box-shadow: 8px 5px 18px 3px rgba(5, 152, 34, 0.35);
        .version {
            color: #727272;
            text-align: start;
        }
    }

`;

const Titulo = styled.span`
    font-size: 5rem;
    font-weight: 700;
`;

const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
`;