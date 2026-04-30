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

#### 🔐 Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | Authenticate user & return tokens |
| **POST** | `/api/auth/refresh-token` | Generate new access token using refresh token |

#### 🌍 Places & Destinations
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/places` | Fetch all travel destinations | **Yes** |
| **POST** | `/api/places` | Create a new place (with image upload) | **Yes** |

#### ❤️ Favorites (Wishlist)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/favorites/user` | Fetch logged-in user's favorites | **Yes** |
| **POST** | `/api/favorites/toggle` | Add/Remove a place from favorites | **Yes** |

---

## ⚙️ Environment Variables

To run this project, you will need to add the following variables to your .env file:

* PORT
* MONGO_URI
* JWT_SECRET
* JWT_REFRESH_SECRET
* CLOUDINARY_CLOUD_NAME
* CLOUDINARY_API_KEY
* CLOUDINARY_API_SECRET

---

## 🚀 Getting Started

1. Clone the repository:
  ```bash
  git clone https://github.com/Lahiru075/travel_app_task_be.git
  ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

---
