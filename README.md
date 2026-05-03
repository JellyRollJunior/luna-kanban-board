# luna-kanban-board

## Endpoints

| Method | URI          | Function | Body (inputs)                   | Outputs | Notes                                                                           |
| ------ | ------------ | -------- | ------------------------------- | ------- | ------------------------------------------------------------------------------- |
| POST   | /auth/signup | Signup   | username, password, displayName |         | password: { 8 - 16 characters, uppercase, lowercase, number, special character} |

# Todos

- zod schema validation signup input
- signup user Mapper + DTO
- error handler

- cors
- tests(?)
