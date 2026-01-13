# Troubleshooting Gemini API Issues

## Error: "Gemini API key is not configured"

### ✅ Solution 1: Restart Development Server

**The most common issue**: React only loads environment variables when the server starts.

1. **Stop your current server**:
   - Press `Ctrl+C` in the terminal where `npm start` is running

2. **Start the server again**:
   ```bash
   npm start
   ```

3. **Wait for the server to fully start** (you'll see "Compiled successfully!")

4. **Try the feature again**

### ✅ Solution 2: Verify .env File

1. **Check if .env exists**:
   - Location: `client/.env` (in the client folder, not root)
   - File should contain:
     ```
     REACT_APP_GEMINI_API_KEY=AIzaSyA3N0pqu51VI1VVONW-OJ2leWEoqgi-Lds
     REACT_APP_API_URL=
     ```

2. **Verify format**:
   - ✅ Correct: `REACT_APP_GEMINI_API_KEY=your_key_here`
   - ❌ Wrong: `GEMINI_API_KEY=your_key_here` (missing REACT_APP_ prefix)
   - ❌ Wrong: `REACT_APP_GEMINI_API_KEY = your_key_here` (spaces around =)
   - ❌ Wrong: `REACT_APP_GEMINI_API_KEY="your_key_here"` (quotes not needed)

3. **Check for hidden characters**:
   - Make sure there are no extra spaces
   - No quotes around the key
   - No line breaks in the middle of the key

### ✅ Solution 3: Clear Cache and Restart

If restarting doesn't work:

```bash
# Stop server (Ctrl+C)

# Clear React cache
rm -rf node_modules/.cache

# Restart
npm start
```

Or on Windows PowerShell:
```powershell
# Stop server (Ctrl+C)

# Clear cache
Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue

# Restart
npm start
```

### ✅ Solution 4: Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for messages like:
   - "Gemini API Key Status: ✓ Configured" (good)
   - "Gemini API Key Status: ✗ Missing" (bad)

### ✅ Solution 5: Verify Environment Variable Loading

Add this temporarily to check (remove after debugging):

In `client/src/services/geminiService.js`, you'll see debug logs in development mode that show:
- Whether the key is found
- The key length

### 🔍 Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Key not found | Server not restarted | Restart `npm start` |
| Key is undefined | Wrong variable name | Use `REACT_APP_GEMINI_API_KEY` |
| Key is empty string | .env file missing or wrong format | Check .env file format |
| Works in one page, not another | Import issue | Check imports are correct |

### 📝 Quick Checklist

- [ ] `.env` file exists in `client/` folder
- [ ] Variable name is `REACT_APP_GEMINI_API_KEY` (with REACT_APP_ prefix)
- [ ] No spaces around `=` sign
- [ ] No quotes around the API key value
- [ ] Development server was restarted after creating/updating .env
- [ ] Browser console shows "✓ Configured" message

### 🆘 Still Not Working?

1. **Check the exact error message** in browser console
2. **Verify .env file location**: Should be `client/.env`, not root `.env`
3. **Try hardcoding temporarily** (for testing only, remove after):
   ```javascript
   const GEMINI_API_KEY = 'AIzaSyA3N0pqu51VI1VVONW-OJ2leWEoqgi-Lds';
   ```
4. **Check if other environment variables work** (test with a simple one)

### 📞 Need More Help?

Check:
- Browser console for detailed errors
- Terminal output when starting server
- Network tab in DevTools to see API calls

