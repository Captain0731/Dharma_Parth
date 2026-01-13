# Gemini API Setup Guide

## Step 1: Create `.env` file

Create a `.env` file in the `client` folder with the following content:

```
REACT_APP_GEMINI_API_KEY=AIzaSyA3N0pqu51VI1VVONW-OJ2leWEoqgi-Lds
REACT_APP_API_URL=
```

## Step 2: Restart Development Server

After creating/updating the `.env` file, you must restart your React development server:

1. Stop the current server (Ctrl+C)
2. Run `npm start` again

React requires a restart to load new environment variables.

## Step 3: Verify Setup

The Gemini API is now integrated into the following features:

- ✅ **AI Skill Prediction** - Uses Gemini to predict missing skills and career improvements
- ✅ **Resume Analysis** - Uses Gemini to analyze resume content and provide insights
- ✅ **Job Role Matching** - Uses Gemini to match users with suitable job roles
- ✅ **Market Insights** - Can be enhanced with Gemini for real-time market data

## API Key Security

⚠️ **Important**: The `.env` file is already added to `.gitignore` to prevent committing your API key to version control.

## Troubleshooting

If you encounter errors:

1. **"Gemini API key is not configured"**
   - Make sure `.env` file exists in the `client` folder
   - Make sure the variable name is exactly `REACT_APP_GEMINI_API_KEY`
   - Restart your development server

2. **API Errors**
   - Check if your API key is valid
   - Verify you have API quota/credits available
   - Check browser console for detailed error messages

3. **CORS Errors**
   - Gemini API should work from browser, but if you see CORS errors, you may need to use a backend proxy

## Features Using Gemini

All AI-powered features now use real Gemini API calls instead of mock data. The responses are parsed and formatted for display in the UI.

