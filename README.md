# luna-kanban-board

## Endpoints

| Method | URI                   | Function                   | Body (inputs)                   | Outputs         | Notes                                                                           |
| ------ | --------------------- | -------------------------- | ------------------------------- | --------------- | ------------------------------------------------------------------------------- |
| POST   | /auth/signup          | Signup                     | username, password, displayName | { displayName } | password: { 8 - 16 characters, uppercase, lowercase, number, special character} |
| POST   | /auth/login           | Login                      | username, password              | { token }       |                                                                                 |
| POST   | /auth/github          | GitHub oauth2 login/signup |                                 |                 | Login with GitHub oauth. Creates an account if no account exists                |
| POST   | /auth/github/callback | GitHub oauth2 callback     |                                 | { token }       | Callback to receive token after successful authorization                        |

# Features

- Authentication
    - GitHub oauth2 login/signup
    - Username + Password login
    - jsonwebtoken endpoint authentication

# Learning Outcomes

- Typing Express.User
- Implement authentication failure error response on a sessionless Passport Local configuration
    - TAKEAWAY: Implementing username + password authentication w/ jwt from scratch is way easier than using passport local + jwt...
    - Needed to write a custom callback to handle authentication failure error messages with sessionless passport local
- Implementing GitHub oauth2 using Passport
    - Testing oauth2 login (use a browser and goto the oauth route)
- Env config file
    - Throws error if necessary secrets are null

# Todos

- cors
- tests(?)
- env var config file
