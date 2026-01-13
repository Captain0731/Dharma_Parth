## 🚀 Project: DharmaPath / Joblytic – Career Mapping & Development Platform

### 1. One‑Line Pitch
**DharmaPath** is an AI-inspired, fully responsive career‑mapping platform that helps students and professionals discover the right career path, see their skill gaps, analyze resumes, and get job role matches – all in a single, beautiful web app.

---

### 2. Problem & Motivation
- **Chaos in career choices**: Most students and early‑career professionals don’t know which roles truly fit their skills and interests.
- **Scattered tools**: Resume checkers, job boards, and career advice are all in different places with no unified view of “Where do I stand?”
- **Lack of clear roadmap**: Even after choosing a role (e.g., Frontend Developer), people don’t know *exactly* which skills to learn next, what salary to expect, or how the market looks in Indian cities.

**Goal for the hackathon**: Build a front‑end heavy, demo‑ready product that feels like a real SaaS platform – even without a production backend – and showcases strong UX, clear logic, and AI‑style insights via smart mock services.

---

### 3. What the App Does (Feature Overview)

- **Career Mapper**
  - User selects **skills**, **interests**, and **experience level**.
  - App recommends best‑fit careers (e.g., Frontend Developer, UI/UX Designer, Data Analyst).
  - Shows **match score**, **salary ranges** (entry/mid/senior), and a **multi‑level roadmap** (beginner → intermediate → advanced) plus **learning resources**.

- **AI Skill Prediction (Mock AI)**
  - User selects current skills + target career.
  - App suggests **missing skills**, **next best skill to learn**, and **career match improvement %** in Hinglish‑style messaging.

- **Resume Upload → Auto Analysis (Mock AI)**
  - User uploads a resume file (UI side only; analysis uses mock data).
  - App displays:
    - Resume strength score
    - Extracted skills
    - Experience level
    - Skill gaps
    - Career matches with visual progress bars
    - Actionable recommendations

- **Smart Job Role Matching (Mock AI)**
  - Input: skills, interests, and experience.
  - Output: multiple roles (e.g., Frontend Developer, UI Engineer, Web Designer, Full Stack Developer) with:
    - Match percentage
    - Ready / Not Ready badge
    - Missing skills
    - Expected salary range (₹ LPA)

- **Local Job Market Insights (India‑Focused)**
  - City‑wise demand for roles (Bangalore, Pune, Mumbai, Delhi NCR, Hyderabad, Chennai, Ahmedabad).
  - Demand level, salary range, active jobs, and visual heatmaps for skills.

- **Mentor Booking (UI only)**
  - Beautiful cards for mentors and 1:1 session concept (ready for real backend integration).

- **Auth Flows (Demo Mode)**
  - Sign Up, Sign In, OTP Verify, Forgot Password.
  - Currently uses local/demo state (no real auth backend) – ideal for hackathon demo without infra issues.

---

### 4. Architecture & Tech Stack

- **Frontend Only (Hackathon‑Friendly)**
  - No backend server required to run the demo.
  - Ready to connect to any REST/GraphQL/AI backend later.

- **Tech Stack**
  - `React 19.2.3`
  - `React DOM 19.2.3`
  - `React Router DOM 7.11.0` (installed; current navigation via React state)
  - `Framer Motion` – animations, transitions
  - `Axios` – API client (configured, currently unused with mocks)
  - `React Scripts` (CRA) – build & dev tooling
  - `Testing Library` stack – ready for tests

- **Styling & UX**
  - Custom CSS with **Glassmorphism**.
  - Strong focus on **hero sections**, **cards**, **gradients**, and **rounded containers**.
  - Fully responsive for mobile, tablet, and desktop.

- **AI Layer (Mocked for Stability)**
  - File: `client/src/services/geminiService.js`
  - Provides **local mock implementations** for all AI calls:
    - `geminiSkillPrediction`
    - `geminiResumeAnalysis`
    - `geminiJobRoleMatching`
    - `geminiCareerPathRecommendation`
    - `geminiMarketInsights`
  - This avoids API key / quota / billing issues during hackathon demos.

---

### 5. Project Structure (High Level)

```text
client/
  src/
    App.js                     # Single-page app controller (state-based routing)
    index.js                   # React entry, BrowserRouter wrapper

    components/
      Navbar/
      Footer/
      Signup/

    pages/
      Home/                    # Landing + sections (Services, CTA, Connect, etc.)
      About/
      Services/
      ServicesDetail/
      CareerMapper/            # Core career mapping logic + roadmap
      CareerFeatures/          # Feature highlight sections
      CareerNews/
      CareerTools/             # All AI-style tools:
                               # - AISkillPrediction
                               # - ResumeAnalysis
                               # - JobRoleMatching
                               # - MentorBooking
                               # - MarketInsights
      Resources/               # HowItWorks, CareerBenefits, SuccessStories, Blogs
      SignIn/
      OtpVerify/
      NotFound/

    services/
      api.js                   # Axios base config (backend-ready but unused)
      authService.js           # Auth service (currently demo-mode / mock)
      geminiService.js         # Local mock AI services (no external calls)
```

---

### 6. How to Run (Hackathon Demo)

```bash
cd client
npm install        # first time only
npm start
```

- App runs at `http://localhost:3000/`.
- No backend, DB, or API keys required – **everything works in demo/mock mode**.

---

### 7. Suggested Demo Flow (5–7 minutes)

1. **Landing Page (Home)**
   - Show hero section, career‑focused messaging, services, testimonials, and news.

2. **Career Mapper**
   - Navigate to Career Mapper.
   - Select a few skills, interests, and experience level.
   - Click “Map My Career Path” and show:
     - Career matches with scores and salary ranges.
     - Click into a career → show roadmap (beginner/intermediate/advanced) + resources.

3. **AI Skill Prediction**
   - Go to **AI Skill Prediction**.
   - Select current skills + target career.
   - Show missing skills, improvement %, success probability, and Hinglish message.

4. **Resume Analysis**
   - Upload a resume (any file) – explain that analysis uses mock AI for now.
   - Show strength score, skills, gaps, recommendations, and career matches.
 
5. **Job Role Matching**
   - Select skills, interests, and experience.
   - Show multiple role cards with match %, readiness, missing skills, and salaries.

6. **Local Market Insights**
   - Open **Market Insights**.
   - Show city filters and how demand/salary change by location.

7. **Auth Pages (Optional)**
   - Briefly show Signup / Signin / OTP UI to demonstrate readiness for real auth backend.

---

### 8. What Makes This Hackathon‑Ready

- **No external dependencies**: All AI features are mocked locally; no risk of failing demo due to API quota or billing.
- **Clean architecture**: `geminiService.js` can later be swapped to real AI provider with same function signatures.
- **Strong UX**: Glassmorphism, gradients, cards, animations, and clear CTAs designed for modern product demos.
- **Career‑specific logic**: Match scores, salary ranges, roadmaps, and insights are tuned for Indian tech roles.

---

### 9. Future Work (If Asked by Judges)

- Plug `geminiService` into a real AI backend (Gemini / OpenAI / Groq) using environment variables.
- Add real authentication (JWT + backend) and user profiles (saved plans, resumes, and progress).
- Integrate real mentor marketplace with booking, availability, and payments.
- Add multi‑language support (English + Hindi) for wider accessibility.
- Build a recommendation engine that learns from user interactions and improves matches over time.

---

### 10. One‑Slide Summary (Verbal)

- **Problem**: Students and young professionals feel lost about which career to choose and how to get there.
- **Solution**: A beautiful, AI‑inspired web app that maps skills → careers, shows gaps, analyzes resumes, and surfaces market insights.
- **Tech**: React 19, Framer Motion, custom glassmorphism UI, local mock AI services (backend‑ready).
- **Status**: Frontend‑complete, demo‑ready, backend‑ready – perfect for hackathon judging and future expansion.


