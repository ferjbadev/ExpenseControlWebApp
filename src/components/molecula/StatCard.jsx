import styled from "styled-components";
import Card from "../atomos/Card";

export default function StatCard({ title, value, icon, color, subtitle }) {
    return (
        <Card hover>
            <Container>
                <IconWrapper $color={color}>
                    {icon}
                </IconWrapper>
                <Content>
                    <Title>{title}</Title>
                    <Value>{value}</Value>
                    {subtitle && <Subtitle>{subtitle}</Subtitle>}
                </Content>
            </Container>
        </Card>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const IconWrapper = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background-color: ${props => props.$color}20;
    color: ${props => props.$color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Title = styled.h4`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.colorSubtitle};
`;

const Value = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.text};
`;

const Subtitle = styled.span`
    font-size: 12px;
    color: ${props => props.theme.colorSubtitle};
`;
