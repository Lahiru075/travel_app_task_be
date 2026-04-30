# 🚀 Travel Explore App - Backend API

This is a professional RESTful API built using the **MERN Stack** (Node.js, Express, MongoDB) with **TypeScript** to power a high-performance Travel Mobile Application. It features secure user authentication, destination management, and cloud-based image storage.

---

## 🛠 Tech Stack
- **Server:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** MongoDB Atlas
- **Authentication:** JWT (Access & Refresh Tokens), Bcrypt.js
- **File Management:** Cloudinary (Cloud Storage), Multer
- **Environment Management:** Dotenv

---

## ✨ Key Features
- **Secure Authentication:** User registration and login with encrypted passwords.
- **Dual Token System:** Implementation of Access and Refresh tokens for enhanced security and better UX.
- **Image Upload:** Integrated Cloudinary for dynamic destination image management.
- **Protected Routes:** Middleware-based authorization to secure sensitive data.
- **Place Management:** Endpoints to fetch and create travel destinations.
- **Wishlist System:** Robust "Toggle" logic for managing user favorite places.

---

## 📂 Project Structure
```text
src/
├── config/       # Database & Cloudinary configuration
├── controller/   # API logic & controllers
├── middleware/   # Auth & Validation middlewares
├── model/        # Mongoose schemas & TypeScript interfaces
├── routes/       # API endpoint definitions
├── utils/        # Token generation & utility functions
└── index.ts      # Entry point
```

---

## 📡 API Endpoints

### 🔐 Authentication

**Method** **Endpoint**	            **Description**
POST	     `/api/auth/register`	       Register a new user
POST	     `/api/auth/login`	         Authenticate user & return tokens
POST	     `/api/auth/refresh-token`	 Generate new access token using refresh token

---

