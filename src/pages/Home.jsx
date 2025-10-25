import { useState } from "react";
import styled from "styled-components";
import { UserAuth } from "../contexts/AuthContext";
import { useExpenseStore } from "../store/ExpenseStore";
import Modal from "../components/atomos/Modal";
import ExpenseForm from "../components/molecula/ExpenseForm";
import ExpenseList from "../components/molecula/ExpenseList";
import StatCard from "../components/molecula/StatCard";
import CategoryChart from "../components/molecula/CategoryChart";
import EmptyState from "../components/molecula/EmptyState";
import QuickActions from "../components/molecula/QuickActions";
import Footer from "../components/atomos/Footer";
import { FiDollarSign, FiTrendingUp, FiShoppingCart, FiLogOut, FiPlus, FiSun, FiMoon } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
    const { logout, user } = UserAuth();
    const { getTotalExpenses, getMonthlyStats, expenses } = useExpenseStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingExpense, setEditingExpense] = useState(null);
    const { theme, setTheme } = useContext(ThemeContext);

    const totalExpenses = getTotalExpenses();
    const monthlyStats = getMonthlyStats();
    const hasExpenses = expenses.length > 0;

    const handleEdit = (expense) => {
        setEditingExpense(expense);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingExpense(null);
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const handleExportData = () => {
        const dataStr = JSON.stringify(expenses, null, 2);
        const dataBlob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `expenses-${new Date().toISOString().split("T")[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleClearAll = () => {
        localStorage.removeItem("expense-storage");
        window.location.reload();
    };

    return (
        <Container>
            <Header>
                <HeaderLeft>
                    <Logo>💰</Logo>
                    <HeaderInfo>
                        <Title>Expense Control</Title>
                        <Subtitle>Welcome back, {user?.email || "User"}</Subtitle>
                    </HeaderInfo>
                </HeaderLeft>
                <HeaderRight>
                    <ThemeToggle onClick={toggleTheme}>
                        {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
                    </ThemeToggle>
                    <AddButton onClick={() => setIsModalOpen(true)}>
                        <FiPlus size={20} />
                        Add Expense
                    </AddButton>
                    <LogoutButton onClick={logout}>
                        <FiLogOut size={20} />
                        Logout
                    </LogoutButton>
                </HeaderRight>
            </Header>

            <MainContent>
                {hasExpenses ? (
                    <>
                        <StatsGrid>
                            <StatCard
                                title="Total Expenses"
                                value={`$${totalExpenses.toFixed(2)}`}
                                icon={<FiDollarSign />}
                                color="#FF6B6B"
                                subtitle="All time"
                            />
                            <StatCard
                                title="This Month"
                                value={`$${monthlyStats.total.toFixed(2)}`}
                                icon={<FiTrendingUp />}
                                color="#4ECDC4"
                                subtitle={`${monthlyStats.count} transactions`}
                            />
                            <StatCard
                                title="Average Expense"
                                value={`$${monthlyStats.average.toFixed(2)}`}
                                icon={<FiShoppingCart />}
                                color="#FFE66D"
                                subtitle="Per transaction"
                            />
                        </StatsGrid>

                        <ContentGrid>
                            <LeftColumn>
                                <ExpenseList onEdit={handleEdit} />
                            </LeftColumn>
                            <RightColumn>
                                <CategoryChart />
                                <QuickActions 
                                    onExport={handleExportData}
                                    onClearAll={handleClearAll}
                                    totalExpenses={expenses.length}
                                />
                            </RightColumn>
                        </ContentGrid>
                    </>
                ) : (
                    <EmptyState onAddExpense={() => setIsModalOpen(true)} />
                )}
            </MainContent>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={editingExpense ? "Edit Expense" : "Add New Expense"}
            >
                <ExpenseForm
                    expense={editingExpense}
                    onClose={handleCloseModal}
                />
            </Modal>

            <Footer />
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    background-color: ${props => props.theme.body};
    padding: 24px;
    transition: background-color 0.3s ease;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    flex-wrap: wrap;
    gap: 16px;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Logo = styled.div`
    font-size: 48px;
    animation: bounce 2s ease-in-out infinite;

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;

const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.theme.text};
`;

const Subtitle = styled.p`
    margin: 0;
    font-size: 16px;
    color: ${props => props.theme.colorSubtitle};
`;

const HeaderRight = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const ThemeToggle = styled.button`
    padding: 12px;
    background-color: ${props => props.theme.bg3};
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.bg4};
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.bg4};
        transform: scale(1.05);
    }
`;

const AddButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background-color: #00F34A;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #00D940;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 243, 74, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
`;

const LogoutButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 12px;
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

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 24px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
