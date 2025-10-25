import styled from "styled-components";
import Card from "../atomos/Card";
import { FiDownload, FiTrash2, FiPieChart } from "react-icons/fi";

export default function QuickActions({ onExport, onClearAll, totalExpenses }) {
    const handleClearAll = () => {
        if (window.confirm("Are you sure you want to delete ALL expenses? This action cannot be undone.")) {
            onClearAll();
        }
    };

    return (
        <Card>
            <Title>Quick Actions</Title>
            <ActionsGrid>
                <ActionButton onClick={onExport} $color="#4ECDC4">
                    <FiDownload size={24} />
                    <ActionText>
                        <ActionTitle>Export Data</ActionTitle>
                        <ActionSubtitle>Download as JSON</ActionSubtitle>
                    </ActionText>
                </ActionButton>
                
                <ActionButton as="div" $color="#FFE66D">
                    <FiPieChart size={24} />
                    <ActionText>
                        <ActionTitle>Total Tracked</ActionTitle>
                        <ActionSubtitle>{totalExpenses} expenses</ActionSubtitle>
                    </ActionText>
                </ActionButton>

                <ActionButton onClick={handleClearAll} $color="#FF6B6B">
                    <FiTrash2 size={24} />
                    <ActionText>
                        <ActionTitle>Clear All</ActionTitle>
                        <ActionSubtitle>Delete everything</ActionSubtitle>
                    </ActionText>
                </ActionButton>
            </ActionsGrid>
        </Card>
    );
}

const Title = styled.h3`
    margin: 0 0 20px 0;
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.text};
`;

const ActionsGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ActionButton = styled.button`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: ${props => props.theme.bg3};
    border: 2px solid ${props => props.$color};
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${props => props.$color};

    &:hover {
        background-color: ${props => props.$color}20;
        transform: translateX(4px);
    }
`;

const ActionText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
    flex: 1;
`;

const ActionTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;

const ActionSubtitle = styled.span`
    font-size: 12px;
    color: ${props => props.theme.colorSubtitle};
`;
