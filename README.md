# 🏨 Hotel Ticketing System

A fully functional **Hotel Ticketing and Issue Management System** built using **NestJS**, **PostgreSQL**, and **Prisma ORM**, with role-based access, secure authentication, and complete backend API features. 

---

## 📌 Features

- 🔐 JWT-based Authentication & Authorization
- 🧑‍💻 Role & Department based User Management
- 🛠️ Issue & Ticket Creation, Assignment, and Tracking
- 🧾 Data Validation (DTO + Pipes)
- 📋 Pagination, Filtering, and Search Support
- ✅ Unit Testing for Core Features
- 🧰 Data Encryption & Logging
- ⚙️ Prisma ORM for DB interaction (PostgreSQL)
- 🧱 Modular NestJS Architecture with:
  - Pipes
  - Guards
  - Interceptors
  - Custom Decorators

---

## 🗂️ Tech Stack

| Layer         | Technology             |
|---------------|------------------------|
| Backend       | NestJS (Node.js, TypeScript) |
| ORM           | Prisma ORM             |
| Database      | PostgreSQL             |
| Auth          | JWT + Password Hashing |
| Validation    | class-validator, class-transformer |
| Testing       | Jest                   |
| Dev Tools     | ESLint, Prettier, Dotenv |
| Deployment    | (Optional) Docker / Railway / Render |

---

## 🧑‍💻 Modules Overview

- `User Management`: Registration, Login, Role Assignment, Approval
- `Ticket Management`: Create, Update, View Tickets
- `Assignment`: Assign tickets to users with deadline tracking
- `Feedback`: Submit feedback after issue resolution
- `Search & Filter`: Filter tickets by status, priority, and issue type
- `User Roles`: Admin, Support Staff, Guests
- `Issue Types & Departments`: Structured problem categorization
- `Logging`: Request-response logging for debugging
- `Unit Testing`: Business logic tested using Jest

---

## 📊 Database Schema (ER Diagram)

![Database ER Diagram](./hotel-ticketing-er.png)

> Designed following normalization principles. Implemented via Prisma schema.

---

## 🔒 Authentication Flow

- **Login** with email & password
- Passwords are **encrypted**
- Users receive a **JWT token** after successful login
- Protected routes use **Guards** and **Custom Decorators**

---

## 📂 API Endpoints (Sample)

| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| POST   | /auth/register          | User Registration        |
| POST   | /auth/login             | User Login (JWT Token)   |
| GET    | /tickets                | View All Tickets         |
| POST   | /tickets                | Create New Ticket        |
| PUT    | /tickets/:id/assign     | Assign a Ticket          |
| GET    | /tickets/search         | Search + Filter Tickets  |
| GET    | /feedback               | Get Feedback List        |

> Total: ✅ **30+ fully documented API endpoints**

---

## ✅ Test Coverage

- **Unit tests** written for core logic
- Tested using **Jest**
- Ensures functionality like ticket creation, user auth, and feedback submission

---

## 📦 Setup & Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hotel-ticketing-system.git
cd hotel-ticketing-system

# Install dependencies
npm install

# Configure .env file
cp .env.example .env

# Prisma DB setup
npx prisma migrate dev
npx prisma generate

# Run development server
npm run start:dev
