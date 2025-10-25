# 💰 Expense Control Web App

A modern, feature-rich expense tracking application built with React, Vite, and Supabase. Take control of your finances with beautiful visualizations, category tracking, and intuitive expense management.

![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![React](https://img.shields.io/badge/React-19.1.1-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

### 🔐 Authentication
- Secure Google OAuth integration via Supabase
- Protected routes for authenticated users
- Easy login/logout functionality

### 💵 Expense Management
- ✅ Add, edit, and delete expenses
- 📝 Detailed expense information (description, amount, category, date, notes)
- 🎨 8 pre-defined colorful categories
- 🔍 Filter expenses by category
- 🔄 Sort by date or amount

### 📊 Analytics & Insights
- 💰 Total expenses overview (all-time)
- 📈 Monthly statistics and trends
- 📊 Visual category breakdown with progress bars
- 💵 Average expense calculation
- 🎯 Transaction counting

### 🎨 User Interface
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎯 Intuitive and modern UI
- 💾 Data persistence with local storage

### 🚀 Additional Features
- 📥 Export data as JSON
- 🗑️ Clear all expenses option
- 🎭 Empty state with helpful onboarding
- ⚡ Fast and optimized performance

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.10
- **Styling**: Styled Components 6.1.19
- **State Management**: Zustand 5.0.8 with persist middleware
- **Authentication**: Supabase Auth
- **Routing**: React Router DOM 7.9.4
- **Icons**: React Icons 5.5.0
- **Query Management**: TanStack React Query 5.90.5

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ExpenseControlWebApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase**
   - Create a project at [supabase.com](https://supabase.com)
   - Enable Google OAuth in Authentication settings
   - Copy your project URL and anon key to `.env.local`

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage Guide

### Getting Started
1. **Login**: Click "Sign in with Google" on the login page
2. **Add Expense**: Click the "Add Expense" button in the header
3. **Fill Details**: Enter description, amount, category, date, and optional notes
4. **Save**: Click "Add Expense" to save

### Managing Expenses
- **Edit**: Click the edit icon (✏️) on any expense
- **Delete**: Click the trash icon (🗑️) and confirm deletion
- **Filter**: Use the category dropdown to filter expenses
- **Sort**: Use the sort dropdown to order by date or amount

### Additional Actions
- **Theme Toggle**: Click the sun/moon icon to switch themes
- **Export Data**: Use the "Export Data" button to download as JSON
- **Clear All**: Remove all expenses (requires confirmation)

## 📁 Project Structure

```
ExpenseControlWebApp/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/
│   │   ├── atomos/      # Basic UI components (Button, Input, Card, Modal)
│   │   ├── molecula/    # Composite components (ExpenseForm, ExpenseList, etc.)
│   │   └── templates/   # Page templates (LoginTemplate, HomeTemplate)
│   ├── contexts/        # React contexts (AuthContext, ThemeContext)
│   ├── hooks/           # Custom hooks (ProtectedRoute)
│   ├── pages/           # Page components (Home, Login)
│   ├── routers/         # Route configuration
│   ├── store/           # Zustand stores (ExpenseStore, AuthStore)
│   ├── styles/          # Theme and style variables
│   ├── supabase/        # Supabase configuration
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/              # Public assets
├── .env.local           # Environment variables (create this)
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Categories

The app includes 8 pre-defined categories:
- 🍔 Food
- 🚗 Transport
- 🎮 Entertainment
- 🛍️ Shopping
- 💊 Health
- 💡 Bills
- 📚 Education
- 📦 Other

## 🚀 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Authentication by [Supabase](https://supabase.com)
- UI inspiration from modern expense tracking apps

## 📞 Support

For support, please open an issue in the repository.

---

Made with ❤️ by ferjbadev
