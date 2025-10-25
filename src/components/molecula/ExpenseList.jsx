import { useState } from "react";
import styled from "styled-components";
import Card from "../atomos/Card";
import ExpenseItem from "./ExpenseItem";
import { useExpenseStore } from "../../store/ExpenseStore";

export default function ExpenseList({ onEdit }) {
    const { expenses, deleteExpense, categories } = useExpenseStore();
    const [filterCategory, setFilterCategory] = useState("all");
    const [sortBy, setSortBy] = useState("date");

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this expense?")) {
            deleteExpense(id);
        }
    };

    // Filter expenses
    let filteredExpenses = expenses;
    if (filterCategory !== "all") {
        filteredExpenses = expenses.filter(
            (expense) => expense.category === filterCategory
        );
    }

    // Sort expenses
    const sortedExpenses = [...filteredExpenses].sort((a, b) => {
        if (sortBy === "date") {
            return new Date(b.date) - new Date(a.date);
        } else if (sortBy === "amount") {
            return parseFloat(b.amount) - parseFloat(a.amount);
        }
        return 0;
    });

    return (
        <Card>
            <Header>
                <Title>Recent Expenses</Title>
                <Filters>
                    <Select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                        <option value="all">All Categories</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.name}>
                                {cat.icon} {cat.name}
                            </option>
                        ))}
                    </Select>
                    <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="date">Sort by Date</option>
                        <option value="amount">Sort by Amount</option>
                    </Select>
                </Filters>
            </Header>

            <ExpenseListContainer>
                {sortedExpenses.length === 0 ? (
                    <EmptyState>
                        {filterCategory === "all"
                            ? "No expenses yet. Click 'Add Expense' to get started!"
                            : `No expenses in ${filterCategory} category.`}
                    </EmptyState>
                ) : (
                    sortedExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            onEdit={onEdit}
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </ExpenseListContainer>
        </Card>
    );
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 16px;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.text};
`;

const Filters = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

const Select = styled.select`
    padding: 8px 12px;
    border: 2px solid ${props => props.theme.bg4};
    border-radius: 8px;
    font-size: 14px;
    background-color: ${props => props.theme.bg3};
    color: ${props => props.theme.text};
    cursor: pointer;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: #00F34A;
    }
`;

const ExpenseListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 600px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: ${props => props.theme.bg4};
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #00F34A;
        border-radius: 4px;
    }
`;

const EmptyState = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: ${props => props.theme.colorSubtitle};
    font-size: 16px;
`;
