# Expense Control Web App - Features

## 🎯 Core Features

### 1. **User Authentication**
- Google OAuth integration via Supabase
- Secure login/logout functionality
- Protected routes for authenticated users

### 2. **Expense Management**
- ✅ Add new expenses with detailed information
- ✅ Edit existing expenses
- ✅ Delete expenses with confirmation
- ✅ Categorize expenses (8 pre-defined categories)
- ✅ Add notes to expenses
- ✅ Date tracking for each expense

### 3. **Dashboard & Statistics**
- 📊 Total expenses overview (all time)
- 📈 Monthly statistics
- 💰 Average expense calculation
- 🎨 Visual category breakdown with progress bars
- 📱 Responsive stat cards with icons

### 4. **Expense List**
- 📋 Scrollable list of all expenses
- 🔍 Filter by category
- 🔄 Sort by date or amount
- 🎨 Color-coded categories
- ⚡ Quick edit/delete actions

### 5. **Category Analytics**
- 📊 Visual breakdown by category
- 💵 Total amount per category
- 🔢 Transaction count per category
- 📈 Percentage distribution
- 🎨 Color-coded progress bars

### 6. **User Interface**
- 🌓 Dark/Light theme toggle
- 🎨 Modern, clean design
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 🎯 Intuitive navigation

### 7. **Data Persistence**
- 💾 Local storage using Zustand persist
- 🔄 Data survives page refreshes
- 📦 Efficient state management

## 🎨 Design Highlights

- **Color Scheme**: Green accent (#00F34A) with theme-aware backgrounds
- **Typography**: Clean, modern fonts with proper hierarchy
- **Spacing**: Consistent padding and margins
- **Icons**: React Icons (Feather Icons)
- **Animations**: Smooth transitions and hover effects

## 🛠️ Technologies Used

- **Frontend**: React 19 with Vite
- **Styling**: Styled Components
- **State Management**: Zustand with persist middleware
- **Authentication**: Supabase Auth
- **Icons**: React Icons
- **Routing**: React Router DOM

## 📱 Responsive Design

- Desktop: Full layout with sidebar
- Tablet: Stacked layout
- Mobile: Optimized single column

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Configure Supabase credentials in `.env.local`
3. Run development server: `npm run dev`
4. Open browser at `http://localhost:5173`

## 🔐 Environment Variables

Create a `.env.local` file with:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📝 Usage Tips

1. **Adding Expenses**: Click "Add Expense" button in the header
2. **Editing**: Click the edit icon on any expense item
3. **Deleting**: Click the trash icon (confirmation required)
4. **Filtering**: Use the category dropdown in the expense list
5. **Sorting**: Use the sort dropdown to order by date or amount
6. **Theme**: Toggle between light/dark mode using the sun/moon icon

## 🎯 Future Enhancements (Optional)

- Export data to CSV/PDF
- Budget limits and alerts
- Recurring expenses
- Multi-currency support
- Charts and graphs (pie charts, line graphs)
- Search functionality
- Date range filters
- Expense tags
- Receipt image uploads
- Mobile app version
