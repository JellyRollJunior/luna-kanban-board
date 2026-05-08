# luna-kanban-board

## Endpoints

| Method | URI          | Function | Body (inputs)                   | Outputs | Notes                                                                           |
| ------ | ------------ | -------- | ------------------------------- | ------- | ------------------------------------------------------------------------------- |
| POST   | /auth/signup | Signup   | username, password, displayName |         | password: { 8 - 16 characters, uppercase, lowercase, number, special character} |
| POST   | /auth/login  | Login    | username, password              |         |                                                                                 |

# Todos

- cors
- tests(?)

- local strategy
    - return jwt on successful auth

# Learning Outcomes

- Typing Express.User
- Implement authentication failure error response on a sessionless Passport Local configuration
    - TAKEAWAY: Implementing username + password authentication w/ jwt from scratch is way easier than using passport local + jwt...
    - Needed to write a custom callback to handle authentication failure error messages with sessionless passport local