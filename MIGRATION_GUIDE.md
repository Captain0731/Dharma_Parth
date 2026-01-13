# 🔄 Project Restructure - Migration Guide

## Overview
This guide will help you reorganize the project into a proper client-server architecture.

## 📁 New Project Structure

```
myapp/
├── client/                 # Frontend React Application
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── server/                 # Backend Node.js/Express Server
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── ...
├── package.json            # Root package.json (monorepo)
└── README.md
```

## 🚀 Step-by-Step Migration

### Step 1: Create Folder Structure

1. Create `client` folder in project root
2. Create `server` folder in project root (already created)

### Step 2: Move Frontend Files

Move these folders/files to `client/`:
- `public/` → `client/public/`
- `src/` → `client/src/`

### Step 3: Copy Package Files

Copy `package.json` from root to `client/package.json` (or create new one)

### Step 4: Install Dependencies

```bash
# Install root dependencies (concurrently for running both)
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Step 5: Update Environment Variables

1. Copy `server/.env.example` to `server/.env`
2. Update MongoDB URI and other configurations

### Step 6: Update Client API Configuration

Create `client/src/config/api.js`:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default API_URL;
```

Add to `client/.env`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## ✅ Verification

1. Start MongoDB
2. Start server: `npm run server` (or `cd server && npm run dev`)
3. Start client: `npm run client` (or `cd client && npm start`)
4. Or run both: `npm run dev`

## 📝 Notes

- Server runs on port 5000 by default
- Client runs on port 3000 by default
- Make sure MongoDB is running before starting server

