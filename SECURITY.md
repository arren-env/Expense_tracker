# Security Policy

## Supported Versions

We currently support the following versions of the Expense Tracker with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of the Expense Tracker seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

1. **DO NOT** open a public GitHub issue for security vulnerabilities
2. Send an email to [bhaveshuni2309@gmail.com] with the following information:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Any suggested fixes (if available)

### What to Expect

- **Response Time**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Investigation**: We will investigate and validate the reported vulnerability
- **Updates**: We will provide regular updates on our progress
- **Resolution**: We aim to resolve security issues within 30 days
- **Credit**: We will credit you for the discovery (unless you prefer to remain anonymous)

### Security Best Practices for Contributors

When contributing to this project, please:

1. **Keep dependencies updated**: Regularly update npm packages to their latest secure versions
2. **Validate user inputs**: Always sanitize and validate any user-provided data
3. **Follow secure coding practices**: Avoid common vulnerabilities like XSS, injection attacks, etc.
4. **Use HTTPS**: Ensure all external resources are loaded over HTTPS
5. **Review third-party code**: Carefully review any new dependencies before adding them

### Known Security Considerations

As this is a client-side application:

- **Data Storage**: Currently uses in-memory storage only. Future implementations with localStorage or external APIs should implement proper data validation
- **Input Sanitization**: Any future user input features should include proper sanitization
- **Dependencies**: Regularly audit npm dependencies for security vulnerabilities using `npm audit`

### Security Tools

We recommend using these tools for security checks:

```bash
# Check for dependency vulnerabilities
npm audit

# Fix automatically fixable vulnerabilities
npm audit fix
```

### Responsible Disclosure

We follow responsible disclosure practices:

1. Security issues are addressed promptly
2. Fixes are developed and tested thoroughly
3. Updates are released as soon as possible
4. Public disclosure happens only after fixes are available

## Security Updates

Security updates will be:

- Released as patch versions (e.g., 1.0.1, 1.0.2)
- Documented in the [CHANGELOG.md](CHANGELOG.md)
- Announced in release notes
- Tagged with `security` label in GitHub releases

Thank you for helping keep the Expense Tracker secure!
