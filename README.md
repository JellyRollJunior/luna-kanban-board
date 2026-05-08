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
