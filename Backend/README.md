# Payana Backend - Authentication API

## Setup Instructions

### 1. Prerequisites
- Node.js installed
- MongoDB running locally on `mongodb://localhost:27017` or update `.env` with your MongoDB URI

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create or verify `.env` file in Backend folder:
```
MONGODB_URI=mongodb://localhost:27017/payana
JWT_SECRET=payana_jwt_secret_key_2026
PORT=5000
NODE_ENV=development
```

### 4. Start MongoDB
**On Windows:**
```bash
mongod
```

**On macOS/Linux:**
```bash
brew services start mongodb-community
```

### 5. Start the Backend Server
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### POST `/api/auth/signup`
Register a new user
```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "username": "username"
  }
}
```

### POST `/api/auth/login`
Login user
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "username": "username"
  }
}
```

### GET `/api/auth/me` (Protected)
Get current user info - requires Authorization header:
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "user": {
    "_id": "user_id",
    "email": "user@example.com",
    "username": "username",
    "createdAt": "2026-01-09T..."
  }
}
```

## Features

✅ User registration with email & username validation
✅ Secure password hashing with bcryptjs
✅ JWT token-based authentication
✅ MongoDB persistent data storage
✅ Error handling for duplicate users
✅ Protected routes with middleware
✅ CORS enabled for frontend (localhost:5173)

## Frontend Integration

Frontend stores JWT token and user data in localStorage:
```javascript
localStorage.setItem('authToken', token);
localStorage.setItem('user', JSON.stringify(user));
```

## Architecture

```
Backend/
├── server.js              # Main Express server
├── .env                   # Environment variables
├── config/
│   └── database.js        # MongoDB connection
├── models/
│   └── User.js            # User schema & methods
├── controllers/
│   └── authController.js  # Auth logic (signup, login, getMe)
├── middleware/
│   └── auth.js            # JWT verification middleware
├── routes/
│   └── auth.js            # Auth API routes
└── package.json
```

## Security Notes

- Passwords are hashed with bcryptjs (salt rounds: 10)
- JWT tokens expire in 7 days
- Change `JWT_SECRET` in production
- Use HTTPS in production
- Store sensitive data securely

## Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check MONGODB_URI in .env

**Port Already in Use:**
- Change PORT in .env or kill the process using port 5000

**CORS Error:**
- Frontend must run on `http://localhost:5173`
- Backend CORS is configured for this origin
