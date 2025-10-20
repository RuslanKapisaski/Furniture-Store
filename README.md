# Furniture-Store

## A simple RESTful API for managing a furniture store. Built to handle user authentication, furniture catalog management, and secure data access. This project is ideal for practicing full-stack development concepts like routing, CRUD operations, form validation, and session-based authentication.

---

### Initial Setup

[x] Create repository
[x] Initial folder structure
[x] Add client and install dependecies
[x] Add .gitignore in client folder

---

### Startup clint

[x] Install vite (local dev server)
[x] Setup vite

---

### Setup REST API

[x] Initialize project & add .gitignore
[x] Install and setup express
[x] Add cors
[x] Create furniture controller

---

### Authentication and Authorization

- [x] Create users controller
- [x] Add json parser
- [x] Register user
  - [x] Add register endpoint
  - [x] Add database
  - [x] Add user model
  - [x] Add user service
  - [x] Add first error message function in utils
  - [x] Install bcrypt
  - [x] Hash password before saving into db
- [x] Login user
  - [x] Add login endpoint
  - [x] Verify credentials
  - [x] Create and return token
    - [x] Use environment variable for the secret ('npm i dotenv')
    - [x] Install json web token
- [x] Logout
- [x] Auth middleware

#### Bonus:

- [x] Auto login after register

---

### Furniture endpoints

- [x] Add furniture model
- [x] Add furniture service
- [x] Create furniture endpoint
- [x] Create furniture details endpoint
- [x] Create furniture update endpoint
  - [x] Add owner realtion to furniture model
- [x] Create furniture edit endpoint
- [x] Filter furniture by user id

---
