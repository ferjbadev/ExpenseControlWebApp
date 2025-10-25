import styled from "styled-components";

export default function Card({ children, padding, hover }) {
    return <StyledCard $padding={padding} $hover={hover}>{children}</StyledCard>;
}

const StyledCard = styled.div`
    background-color: ${props => props.theme.bg3};
    border-radius: 16px;
    padding: ${props => props.$padding || "24px"};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid ${props => props.theme.bg4};

    ${props => props.$hover && `
        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 243, 74, 0.2);
        }
    `}
`;
