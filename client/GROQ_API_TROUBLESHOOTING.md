# Groq API "Invalid API Key" Troubleshooting

## ✅ Quick Checks

### 1. **Restart Your Development Server**
**CRITICAL**: React only loads `.env` variables when the server starts.

```bash
# Stop server (Ctrl+C)
npm start
```

### 2. **Verify API Key in .env**
Check `client/.env` file contains:
```
REACT_APP_GEMINI_API_KEY=YOUR_GROQ_API_KEY_HERE
```

### 3. **Check Browser Console**
Open DevTools (F12) → Console tab. You should see:
- `🔑 Groq API Configuration: ✓ Groq API key is configured correctly`
- `📋 API Key Details:` with key prefix and length

### 4. **Verify API Key Status**
1. Go to [Groq Console](https://console.groq.com/keys)
2. Check if your API key is:
   - ✅ Active (not revoked)
   - ✅ Not expired
   - ✅ Has proper permissions

### 5. **Test API Key Directly**
You can test your API key using curl:

```bash
curl -X POST https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_GROQ_API_KEY_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.1-70b-versatile",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

If this returns 401, your API key is invalid.

## 🔧 Common Issues

### Issue 1: Key Not Loaded
**Symptom**: Console shows "✗ Groq API key is missing"

**Solution**:
1. Verify `.env` file exists in `client/` folder
2. Restart dev server completely
3. Clear browser cache

### Issue 2: Invalid Key Format
**Symptom**: Key doesn't start with `gsk_`

**Solution**: 
- Groq keys must start with `gsk_`
- Check for extra spaces or quotes in `.env`

### Issue 3: Key Revoked/Expired
**Symptom**: 401 Unauthorized error

**Solution**:
1. Check [Groq Console](https://console.groq.com/keys)
2. Generate a new API key if needed
3. Update `.env` file
4. Restart server

### Issue 4: Wrong Model Name
**Symptom**: Model not found error

**Solution**: 
Available models:
- `llama-3.1-70b-versatile` (current)
- `mixtral-8x7b-32768`
- `llama-3.1-8b-instant`

## 🆘 Still Not Working?

1. **Check Network Tab** (F12 → Network):
   - Look for the API request
   - Check request headers (Authorization should have Bearer token)
   - Check response status code

2. **Verify Key is Active**:
   - Log into [Groq Console](https://console.groq.com)
   - Check API key status
   - Regenerate if needed

3. **Try Different Model**:
   - Edit `client/src/services/geminiService.js`
   - Change `GROQ_MODEL` to `llama-3.1-8b-instant` (fastest)

4. **Check Rate Limits**:
   - Groq has rate limits
   - Check if you've exceeded them

## 📝 Debug Information

When you see the error, check browser console for:
- API Key Details (prefix, length)
- Error response from Groq
- Network request details

This will help identify the exact issue.

