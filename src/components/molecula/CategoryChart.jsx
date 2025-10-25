import styled from "styled-components";
import Card from "../atomos/Card";
import { useExpenseStore } from "../../store/ExpenseStore";

export default function CategoryChart() {
    const { getExpensesByCategory, getTotalExpenses } = useExpenseStore();
    const categoryData = getExpensesByCategory();
    const total = getTotalExpenses();

    const sortedCategories = Object.entries(categoryData)
        .filter(([, data]) => data.total > 0)
        .sort((a, b) => b[1].total - a[1].total);

    if (sortedCategories.length === 0) {
        return (
            <Card>
                <Title>Expenses by Category</Title>
                <EmptyState>No expenses yet. Start adding your expenses!</EmptyState>
            </Card>
        );
    }

    return (
        <Card>
            <Title>Expenses by Category</Title>
            <ChartContainer>
                {sortedCategories.map(([category, data]) => {
                    const percentage = ((data.total / total) * 100).toFixed(1);
                    return (
                        <CategoryRow key={category}>
                            <CategoryInfo>
                                <CategoryIcon>{data.icon}</CategoryIcon>
                                <CategoryDetails>
                                    <CategoryName>{category}</CategoryName>
                                    <CategoryCount>{data.count} transactions</CategoryCount>
                                </CategoryDetails>
                            </CategoryInfo>
                            <CategoryAmount>
                                <Amount>${data.total.toFixed(2)}</Amount>
                                <Percentage>{percentage}%</Percentage>
                            </CategoryAmount>
                            <ProgressBar>
                                <Progress $width={percentage} $color={data.color} />
                            </ProgressBar>
                        </CategoryRow>
                    );
                })}
            </ChartContainer>
        </Card>
    );
}

const Title = styled.h3`
    margin: 0 0 24px 0;
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.text};
`;

const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CategoryRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const CategoryInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const CategoryIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: ${props => props.theme.bg4};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

const CategoryDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const CategoryName = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;

const CategoryCount = styled.span`
    font-size: 12px;
    color: ${props => props.theme.colorSubtitle};
`;

const CategoryAmount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Amount = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.text};
`;

const Percentage = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #00F34A;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 8px;
    background-color: ${props => props.theme.bg4};
    border-radius: 4px;
    overflow: hidden;
`;

const Progress = styled.div`
    height: 100%;
    width: ${props => props.$width}%;
    background-color: ${props => props.$color};
    border-radius: 4px;
    transition: width 0.5s ease;
`;

const EmptyState = styled.div`
    text-align: center;
    padding: 40px 20px;
    color: ${props => props.theme.colorSubtitle};
    font-size: 16px;
`;
