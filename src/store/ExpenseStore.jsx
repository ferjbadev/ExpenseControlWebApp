import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useExpenseStore = create(
    persist(
        (set, get) => ({
            expenses: [],
            categories: [
                { id: 1, name: "Food", icon: "🍔", color: "#FF6B6B" },
                { id: 2, name: "Transport", icon: "🚗", color: "#4ECDC4" },
                { id: 3, name: "Entertainment", icon: "🎮", color: "#FFE66D" },
                { id: 4, name: "Shopping", icon: "🛍️", color: "#95E1D3" },
                { id: 5, name: "Health", icon: "💊", color: "#F38181" },
                { id: 6, name: "Bills", icon: "💡", color: "#AA96DA" },
                { id: 7, name: "Education", icon: "📚", color: "#FCBAD3" },
                { id: 8, name: "Other", icon: "📦", color: "#A8E6CF" },
            ],
            
            // Add expense
            addExpense: (expense) => {
                const newExpense = {
                    ...expense,
                    id: Date.now(),
                    createdAt: new Date().toISOString(),
                };
                set((state) => ({
                    expenses: [newExpense, ...state.expenses],
                }));
            },

            // Update expense
            updateExpense: (id, updatedExpense) => {
                set((state) => ({
                    expenses: state.expenses.map((expense) =>
                        expense.id === id ? { ...expense, ...updatedExpense } : expense
                    ),
                }));
            },

            // Delete expense
            deleteExpense: (id) => {
                set((state) => ({
                    expenses: state.expenses.filter((expense) => expense.id !== id),
                }));
            },

            // Add category
            addCategory: (category) => {
                const newCategory = {
                    ...category,
                    id: Date.now(),
                };
                set((state) => ({
                    categories: [...state.categories, newCategory],
                }));
            },

            // Get expenses by date range
            getExpensesByDateRange: (startDate, endDate) => {
                const expenses = get().expenses;
                return expenses.filter((expense) => {
                    const expenseDate = new Date(expense.date);
                    return expenseDate >= startDate && expenseDate <= endDate;
                });
            },

            // Get total expenses
            getTotalExpenses: () => {
                const expenses = get().expenses;
                return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
            },

            // Get expenses by category
            getExpensesByCategory: () => {
                const expenses = get().expenses;
                const categories = get().categories;
                
                const categoryTotals = {};
                categories.forEach(cat => {
                    categoryTotals[cat.name] = {
                        total: 0,
                        count: 0,
                        color: cat.color,
                        icon: cat.icon
                    };
                });

                expenses.forEach(expense => {
                    if (categoryTotals[expense.category]) {
                        categoryTotals[expense.category].total += parseFloat(expense.amount);
                        categoryTotals[expense.category].count += 1;
                    }
                });

                return categoryTotals;
            },

            // Get monthly statistics
            getMonthlyStats: () => {
                const expenses = get().expenses;
                const now = new Date();
                const currentMonth = now.getMonth();
                const currentYear = now.getFullYear();

                const monthlyExpenses = expenses.filter((expense) => {
                    const expenseDate = new Date(expense.date);
                    return (
                        expenseDate.getMonth() === currentMonth &&
                        expenseDate.getFullYear() === currentYear
                    );
                });

                const total = monthlyExpenses.reduce(
                    (sum, expense) => sum + parseFloat(expense.amount),
                    0
                );

                return {
                    total,
                    count: monthlyExpenses.length,
                    average: monthlyExpenses.length > 0 ? total / monthlyExpenses.length : 0,
                };
            },
        }),
        {
            name: "expense-storage",
        }
    )
);
