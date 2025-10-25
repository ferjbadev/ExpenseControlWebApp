import styled from "styled-components";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function ExpenseItem({ expense, onEdit, onDelete }) {
    const { description, amount, category, date, notes } = expense;
    
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const formattedAmount = parseFloat(amount).toFixed(2);

    return (
        <Container>
            <CategoryBadge>
                {category}
            </CategoryBadge>
            <Content>
                <MainInfo>
                    <Description>{description}</Description>
                    <Amount>${formattedAmount}</Amount>
                </MainInfo>
                <SubInfo>
                    <Date>{formattedDate}</Date>
                    {notes && <Notes>{notes}</Notes>}
                </SubInfo>
            </Content>
            <Actions>
                <ActionButton onClick={() => onEdit(expense)} $color="#4ECDC4">
                    <FiEdit2 />
                </ActionButton>
                <ActionButton onClick={() => onDelete(expense.id)} $color="#FF6B6B">
                    <FiTrash2 />
                </ActionButton>
            </Actions>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: ${props => props.theme.bg3};
    border: 1px solid ${props => props.theme.bg4};
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateX(4px);
        box-shadow: 0 4px 12px rgba(0, 243, 74, 0.1);
    }
`;

const CategoryBadge = styled.div`
    padding: 8px 12px;
    background-color: ${props => props.theme.bg5};
    color: white;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const MainInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`;

const Description = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;

const Amount = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #00F34A;
`;

const SubInfo = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const Date = styled.span`
    font-size: 14px;
    color: ${props => props.theme.colorSubtitle};
`;

const Notes = styled.span`
    font-size: 14px;
    color: ${props => props.theme.colorSubtitle};
    font-style: italic;
`;

const Actions = styled.div`
    display: flex;
    gap: 8px;
`;

const ActionButton = styled.button`
    padding: 8px;
    background-color: transparent;
    border: 2px solid ${props => props.$color};
    color: ${props => props.$color};
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover {
        background-color: ${props => props.$color};
        color: white;
        transform: scale(1.1);
    }
`;
