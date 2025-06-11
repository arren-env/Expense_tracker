# Contributing to Expense Tracker

Thank you for your interest in contributing to the Expense Tracker project! We welcome contributions of all kinds.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Workflow

1. **Start the development server**:
   ```bash
   npm run dev
   ```
2. **Make your changes** in the appropriate files
3. **Test your changes** thoroughly
4. **Run linting** to ensure code quality:
   ```bash
   npm run lint
   ```
5. **Build the project** to verify everything works:
   ```bash
   npm run build
   ```

## 📝 Code Style Guidelines

- Use **functional components** with hooks instead of class components
- Follow **JSX best practices**:
  - Use PascalCase for component names
  - Use camelCase for prop names
  - Keep components small and focused
- **CSS naming**: Use BEM methodology where appropriate
- **File organization**: Keep related files (component + styles) in the same folder
- **Import order**: 
  1. React imports
  2. Third-party library imports
  3. Local component imports
  4. CSS imports

## 🎯 What We're Looking For

### High Priority
- [ ] Add expense creation functionality
- [ ] Implement expense editing and deletion
- [ ] Add expense categories and filtering
- [ ] Include expense search functionality

### Medium Priority
- [ ] Add data persistence (localStorage)
- [ ] Implement expense analytics
- [ ] Add expense import/export features
- [ ] Improve accessibility (ARIA labels, keyboard navigation)

### Low Priority
- [ ] Add animations and transitions
- [ ] Dark/light theme toggle
- [ ] Mobile app version
- [ ] Multi-currency support

## 🐛 Bug Reports

When reporting bugs, please include:
- **Description**: Clear description of the issue
- **Steps to reproduce**: How to recreate the bug
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Environment**: Browser, OS, Node.js version

## ✨ Feature Requests

For feature requests, please:
- **Check existing issues** to avoid duplicates
- **Describe the feature** in detail
- **Explain the use case** and why it would be valuable
- **Consider the implementation** if you have ideas

## 📋 Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality (when test framework is added)
3. **Ensure all checks pass** (linting, building)
4. **Write clear commit messages**:
   ```
   feat: add expense creation form
   fix: resolve date formatting issue
   docs: update README with new features
   ```
5. **Fill out the PR template** completely
6. **Request review** from maintainers

## 🔍 Component Development

When creating new components:

1. **Create a new folder** in `src/components/`
2. **Include both JSX and CSS files**:
   ```
   ComponentName/
   ├── ComponentName.jsx
   └── ComponentName.css
   ```
3. **Export default** from the JSX file
4. **Use props appropriately** for data and event handling
5. **Keep components reusable** when possible

### Example Component Structure

```jsx
import React from 'react';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2, children }) => {
  return (
    <div className="component-name">
      {/* Component content */}
      {children}
    </div>
  );
};

export default ComponentName;
```

## 🧪 Testing Guidelines

(Note: Testing framework to be implemented)

- Write unit tests for utility functions
- Add integration tests for component interactions
- Test edge cases and error scenarios
- Maintain good test coverage

## 📚 Resources

- [React Documentation](https://reactjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [CSS BEM Methodology](http://getbem.com/)

## 💬 Communication

- **Issues**: Use GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub discussions for questions and ideas
- **Code Reviews**: Be constructive and respectful in feedback

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Expense Tracker! 🎉
