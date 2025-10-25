import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

export default function EmptyState({ onAddExpense }) {
    return (
        <Container>
            <Icon>💸</Icon>
            <Title>Start Tracking Your Expenses</Title>
            <Description>
                Take control of your finances by adding your first expense.
                Track spending, analyze patterns, and achieve your financial goals.
            </Description>
            <AddButton onClick={onAddExpense}>
                <FiPlusCircle size={20} />
                Add Your First Expense
            </AddButton>
            <Features>
                <Feature>
                    <FeatureIcon>📊</FeatureIcon>
                    <FeatureText>Visual Analytics</FeatureText>
                </Feature>
                <Feature>
                    <FeatureIcon>🎯</FeatureIcon>
                    <FeatureText>Category Tracking</FeatureText>
                </Feature>
                <Feature>
                    <FeatureIcon>📱</FeatureIcon>
                    <FeatureText>Easy to Use</FeatureText>
                </Feature>
            </Features>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
    background: linear-gradient(135deg, ${props => props.theme.bg3} 0%, ${props => props.theme.bg2} 100%);
    border-radius: 16px;
    border: 2px dashed ${props => props.theme.bg4};
`;

const Icon = styled.div`
    font-size: 80px;
    margin-bottom: 24px;
    animation: float 3s ease-in-out infinite;

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }
`;

const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    color: ${props => props.theme.text};
    margin: 0 0 16px 0;
`;

const Description = styled.p`
    font-size: 16px;
    color: ${props => props.theme.colorSubtitle};
    max-width: 500px;
    margin: 0 0 32px 0;
    line-height: 1.6;
`;

const AddButton = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    background-color: #00F34A;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 243, 74, 0.3);

    &:hover {
        background-color: #00D940;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 243, 74, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
`;

const Features = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 48px;
    flex-wrap: wrap;
    justify-content: center;
`;

const Feature = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const FeatureIcon = styled.div`
    font-size: 32px;
`;

const FeatureText = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.colorSubtitle};
`;
