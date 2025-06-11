# Expense Tracker

A modern, responsive expense tracking application built with React and Vite. This project displays expense items with detailed date formatting and a clean, card-based UI design.

## 🚀 Features

- **Expense Display**: View expenses with title, amount, and formatted dates
- **Card-based UI**: Clean, modern interface with reusable card components
- **Responsive Design**: Works seamlessly across different screen sizes
- **Date Formatting**: Beautiful date display with month, day, and year breakdown
- **Component Architecture**: Well-structured React components for maintainability

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 4.3.9
- **Language**: JavaScript (JSX)
- **Styling**: CSS3 with custom styling
- **Fonts**: Google Fonts (Noto Sans JP)

## 📁 Project Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   ├── Card/
│   │   │   ├── Card.jsx          # Reusable card wrapper component
│   │   │   └── Card.css
│   │   ├── ExpenseDate/
│   │   │   ├── ExpenseDate.jsx   # Date formatting component
│   │   │   └── ExpenseDate.css
│   │   ├── ExpenseItem/
│   │   │   ├── ExpenseItem.jsx   # Individual expense display
│   │   │   └── ExpenseItem.css
│   │   └── Expenses/
│   │       ├── Expenses.jsx      # Main expenses container
│   │       └── Expenses.css
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expense-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎯 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## 🧩 Component Overview

### App Component
The main application component that contains sample expense data and renders the expenses list.

### Expenses Component
Container component that receives expenses data and renders individual expense items within a card wrapper.

### ExpenseItem Component
Displays individual expense information including:
- Formatted date (via ExpenseDate component)
- Expense title
- Expense amount in USD

### ExpenseDate Component
Handles date formatting and display:
- Month name (e.g., "August")
- Day with leading zeros
- Full year

### Card Component
A reusable wrapper component that provides consistent styling and layout for child components.

## 🎨 Styling Features

- **Dark Theme**: Modern dark color scheme (#3f3f3f background)
- **Google Fonts**: Uses Noto Sans JP for better typography
- **Responsive Layout**: Adapts to different screen sizes
- **Card Design**: Clean, shadowed cards for better visual hierarchy

## 📊 Sample Data

The application comes with sample expense data including:
- Toilet Paper ($94.12)
- New TV ($799.49)
- Car Insurance ($294.67)
- New Desk - Wooden ($450.00)

## 🔧 Customization

### Adding New Expenses
To add new expenses, modify the `expenses` array in `src/App.jsx`:

```jsx
const expenses = [
  {
    id: "e5",
    title: "Your Expense Title",
    amount: 123.45,
    date: new Date(2023, 11, 25), // Year, Month (0-indexed), Day
  },
  // ... existing expenses
];
```

### Styling Modifications
- Global styles: `src/index.css`
- Component-specific styles: Individual CSS files in component folders
- Card styling: `src/components/Card/Card.css`

## 🚀 Future Enhancements

- [ ] Add expense creation functionality
- [ ] Implement expense editing and deletion
- [ ] Add expense categories and filtering
- [ ] Include expense search functionality
- [ ] Add data persistence (localStorage/database)
- [ ] Implement expense analytics and charts
- [ ] Add expense import/export features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**Built with ❤️ using React and Vite**
