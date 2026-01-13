import "./App.css";
import React, { useState, useEffect } from "react";

// Layout
import Navbar from "./components/Navbar/navbar";
import FooterGlass from "./components/Footer/footer";

// Auth
import Signup from "./components/Signup/signup";
import SignIn from "./pages/SignIn/SignIn";
import OtpVerify from "./pages/OtpVerify/OtpVerify";
import ForgotPassword from "./pages/OtpVerify/ForgotPassword";

// Core Pages
import Home from "./pages/Home/home";
import AboutGlass from "./pages/About/AboutGlass";
import Contact from "./pages/Contact2/Contact";

// Home Sections
import Services from "./pages/Services/Services";
import CtaSection from "./pages/CtaSection/CtaSection";
import Connect from "./pages/Connect/connect";
import CareerHighlights from "./pages/CareerFeatures/CareerHighlights";
import CareerShowcase from "./pages/CareerFeatures/CareerShowcase";
import CareerFeatures from "./pages/CareerFeatures/CareerFeatures";
import ServicesDetail from "./pages/ServicesDetail/ServicesDetail";
import TestimonialGlass from "./pages/Testimonial/TestimonialGlass";
import CareerNews from "./pages/CareerNews/CareerNews";
import ContactGlass from "./pages/Contact/ContactGlass";

// Resources
import HowItWorks from "./pages/Resources/HowItWorks";
import CareerBenefits from "./pages/Resources/CareerBenefits";
import SuccessStories from "./pages/Resources/SuccessStories";
import Blogs from "./pages/Resources/Blogs";

// Career Mapper
import CareerMapper from "./pages/CareerMapper/CareerMapper";

// Career Tools
import AISkillPrediction from "./pages/CareerTools/AISkillPrediction";
import ResumeAnalysis from "./pages/CareerTools/ResumeAnalysis";
import JobRoleMatching from "./pages/CareerTools/JobRoleMatching";
import MentorBooking from "./pages/CareerTools/MentorBooking";
import MarketInsights from "./pages/CareerTools/MarketInsights";

// Other
import NotFound from "./pages/NotFound/NotFound";

// Helper to map URL path → internal page key
const pathToPage = (pathname) => {
  const slug = pathname.replace(/^\/+/, "").toLowerCase();
  if (!slug) return "home";

  const validPages = [
    "home",
    "about",
    "career-mapper",
    "skill-prediction",
    "resume-analysis",
    "job-matching",
    "mentor-booking",
    "market-insights",
    "contact",
    "howitworks",
    "whyinvest",
    "successstories",
    "blogs",
    "signup",
    "signin",
    "otp",
    "forgot-password",
  ];

  return validPages.includes(slug) ? slug : "home";
};

// Helper to map page key → URL path
const pageToPath = (page) => {
  if (!page || page === "home") return "/";
  return `/${page}`;
};

function App() {
  // Initialize page from current URL so refresh stays on same page
  const [page, setPage] = useState(() => pathToPage(window.location.pathname));

  const handleNavClick = (target) => {
    const nextPage = target || "home";
    setPage(nextPage);

    // Keep URL in sync so refresh/back/forward work properly
    const newPath = pageToPath(nextPage);
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, "", newPath);
    }

    window.scrollTo(0, 0);
  };

  // Global navigation event (used by CTA / buttons)
  useEffect(() => {
    const handler = () => setPage("signin");
    window.addEventListener("navigate-signin", handler);
    return () => window.removeEventListener("navigate-signin", handler);
  }, []);

  // Pages where navbar/footer should NOT appear
  const hideLayout = ["signin", "signup", "otp", "forgot-password"].includes(page);

  // Handle OTP navigation event
  useEffect(() => {
    const handler = (e) => {
      setPage("otp");
    };
    window.addEventListener('navigate-otp', handler);
    return () => window.removeEventListener('navigate-otp', handler);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPopState = () => {
      const nextPage = pathToPage(window.location.pathname);
      setPage(nextPage);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <>
            <Home />
            <Services />
            <CtaSection />
            <Connect />
            <CareerHighlights onNavClick={handleNavClick} />
            <CareerShowcase onNavClick={handleNavClick} />
            <CareerFeatures onNavClick={handleNavClick} />
            <ServicesDetail />
            <TestimonialGlass />
            <CareerNews />
            <ContactGlass />
          </>
        );

      case "about":
        return <AboutGlass />;

      case "career-mapper":
        return <CareerMapper />;

      // Career Tools Services
      case "skill-prediction":
        return <AISkillPrediction />;
      
      case "resume-analysis":
        return <ResumeAnalysis />;
      
      case "job-matching":
        return <JobRoleMatching />;
      
      case "mentor-booking":
        return <MentorBooking />;
      
      case "market-insights":
        return <MarketInsights />;

      case "contact":
        return <Contact />;

      // Resources
      case "howitworks":
        return <HowItWorks />;

      case "whyinvest":
        return <CareerBenefits />;

      case "successstories":
        return <SuccessStories />;

      case "blogs":
        return <Blogs />;

      // Auth
      case "signup":
        return <Signup onBackHome={() => setPage("home")} />;

      case "signin":
        return (
          <SignIn
            onSignupClick={() => setPage("signup")}
            onForgotPassword={() => setPage("forgot-password")}
          />
        );

      case "otp":
        return <OtpVerify onBackSignIn={() => setPage("signin")} />;

      case "forgot-password":
        return <ForgotPassword onBackSignIn={() => setPage("signin")} />;

      default:
        return <NotFound />;
    }
  };

  return (
    <div className="App">
      {!hideLayout && (
        <Navbar onNavClick={handleNavClick} activePage={page} />
      )}

      {renderPage()}

      {!hideLayout && (
        <FooterGlass onNavClick={handleNavClick} activePage={page} />
      )}
    </div>
  );
}

export default App;
