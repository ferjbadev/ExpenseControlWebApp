// Sample data generator for testing the Expense Control App

export const generateSampleExpenses = () => {
    const sampleExpenses = [
        {
            id: Date.now() + 1,
            description: "Grocery Shopping",
            amount: "125.50",
            category: "Food",
            date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Weekly groceries at Walmart",
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            id: Date.now() + 2,
            description: "Gas Station",
            amount: "45.00",
            category: "Transport",
            date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Full tank",
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            id: Date.now() + 3,
            description: "Netflix Subscription",
            amount: "15.99",
            category: "Entertainment",
            date: new Date().toISOString().split("T")[0],
            notes: "Monthly subscription",
            createdAt: new Date().toISOString(),
        },
        {
            id: Date.now() + 4,
            description: "New Shoes",
            amount: "89.99",
            category: "Shopping",
            date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Nike running shoes",
            createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            id: Date.now() + 5,
            description: "Pharmacy",
            amount: "32.50",
            category: "Health",
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Vitamins and medicine",
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            id: Date.now() + 6,
            description: "Electricity Bill",
            amount: "78.25",
            category: "Bills",
            date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Monthly electricity",
            createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            id: Date.now() + 7,
            description: "Online Course",
            amount: "49.99",
            category: "Education",
            date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Udemy React course",
            createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            id: Date.now() + 8,
            description: "Coffee Shop",
            amount: "12.50",
            category: "Food",
            date: new Date().toISOString().split("T")[0],
            notes: "Morning coffee and pastry",
            createdAt: new Date().toISOString(),
        },
        {
            id: Date.now() + 9,
            description: "Uber Ride",
            amount: "18.75",
            category: "Transport",
            date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Ride to downtown",
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            id: Date.now() + 10,
            description: "Movie Tickets",
            amount: "28.00",
            category: "Entertainment",
            date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Two tickets for evening show",
            createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            id: Date.now() + 11,
            description: "Restaurant Dinner",
            amount: "65.80",
            category: "Food",
            date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Italian restaurant with friends",
            createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
            id: Date.now() + 12,
            description: "Gym Membership",
            amount: "45.00",
            category: "Health",
            date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            notes: "Monthly gym fee",
            createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
        },
    ];

    return sampleExpenses;
};

export const loadSampleData = (addExpense) => {
    const samples = generateSampleExpenses();
    samples.forEach(expense => {
        addExpense(expense);
    });
    return samples.length;
};
