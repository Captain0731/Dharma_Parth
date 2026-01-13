# Career Mapping & Development Platform

A full-stack real estate web application built with React (frontend) and Node.js/Express (backend).

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd myapp
```

2. **Install all dependencies**
```bash
npm run install-all
```

3. **Set up environment variables**

**Server:**
```bash
cd server
cp .env.example .env
# Edit .env with your configuration
```

**Client:**
```bash
cd client
cp .env.example .env
# Edit .env if needed
```

4. **Start MongoDB**
Make sure MongoDB is running on your system or configure MongoDB Atlas connection string in `server/.env`

5. **Run the application**

**Option 1: Run both client and server together**
```bash
npm run dev
```

**Option 2: Run separately**

Terminal 1 (Server):
```bash
npm run server
```

Terminal 2 (Client):
```bash
npm run client
```

## 📁 Project Structure

```
myapp/
├── client/              # React frontend application
│   ├── public/          # Static files
│   ├── src/             # Source code
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── config/      # Configuration files
│   │   └── ...
│   └── package.json
│
├── server/              # Express backend server
│   ├── config/          # Configuration files
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── server.js        # Server entry point
│   └── package.json
│
└── package.json         # Root package.json
```

## 🛠️ Technology Stack

### Frontend
- React 19.2.3
- React Router DOM
- Framer Motion
- Axios
- CSS Modules

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Socket.IO (Real-time)

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/verify-otp` - Verify OTP
- `POST /api/auth/forgot-password` - Forgot password

### Properties
- `GET /api/properties` - Get all properties (with filters)
- `GET /api/properties/:id` - Get single property
- `POST /api/properties` - Create property (Protected)
- `PUT /api/properties/:id` - Update property (Protected)
- `DELETE /api/properties/:id` - Delete property (Protected)

### Users
- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update user profile
- `POST /api/users/favorites/:id` - Add favorite
- `DELETE /api/users/favorites/:id` - Remove favorite

### Inquiries
- `POST /api/inquiries` - Create inquiry
- `GET /api/inquiries` - Get inquiries

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:slug` - Get single blog
- `POST /api/blogs` - Create blog (Admin)

## 🔧 Available Scripts

### Root Level
- `npm run install-all` - Install all dependencies
- `npm run dev` - Run client and server concurrently
- `npm run client` - Run client only
- `npm run server` - Run server only

### Client
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Server
- `npm run dev` - Start development server (nodemon)
- `npm start` - Start production server
- `npm test` - Run tests

## 🌐 Environment Variables

### Server (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/realestate
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
```

### Client (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 📚 Documentation

- [PROJECT_DESCRIPTION.md](./PROJECT_DESCRIPTION.md) - Complete project documentation
- [FRONTEND_NEXT_STEPS.md](./FRONTEND_NEXT_STEPS.md) - Frontend development roadmap
- [server/README.md](./server/README.md) - Backend API documentation
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - Migration instructions

## 🎯 Features

- ✅ User Authentication (Register, Login, OTP)
- ✅ Property Listings with Filters
- ✅ Property Details Page
- ✅ User Dashboard
- ✅ Favorites/Wishlist
- ✅ Property Inquiries
- ✅ Blog System
- ✅ Real-time Chat (Socket.IO)
- ✅ Responsive Design
- ✅ Modern Glassmorphism UI

## 🚧 Development Status

- ✅ Frontend UI Complete
- ✅ Backend API Structure
- 🔄 Backend-Frontend Integration
- ⏳ Advanced Features

## 📝 License

MIT

## 👥 Contributing

Contributions are welcome! Please read the contributing guidelines.

---

**Note:** Make sure to set up your MongoDB database before running the server.
