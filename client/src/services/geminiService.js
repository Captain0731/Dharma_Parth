/**
 * Local AI Service (Mock)
 * ---------------------------------------------
 * To avoid external API issues (keys, quota, billing),
 * this file provides local mock implementations for all
 * AI-powered features so the app keeps working smoothly.
 *
 * If you later want to connect to a real API again
 * (Gemini, OpenAI, Groq, etc.), we can replace these
 * functions with real HTTP calls.
 */

// Simple config helper – currently always "mock mode"
export const checkGeminiConfig = () => ({
  configured: false,
  keyLength: 0,
  envVarExists: false,
  envVarLength: 0,
  message: 'Using local mock AI (no external API configured).'
});

/**
 * Generic mock "AI" call – currently just logs the prompt.
 */
export const callGeminiAPI = async (prompt) => {
  console.warn('callGeminiAPI called in mock mode. Prompt:', prompt);
  return { text: 'Mock AI response (no real API call).', raw: null };
};

/**
 * AI Skill Prediction Service (Mock)
 * Used in: AISkillPrediction page
 * Always returns reliable mock data for consistent UI behavior
 */
export const geminiSkillPrediction = async (selectedSkills, targetCareer) => {
  // Simulate API delay for realistic UX
  await new Promise(resolve => setTimeout(resolve, 800));

  // Ensure we always have valid inputs
  const skills = Array.isArray(selectedSkills) ? selectedSkills : [];
  const career = targetCareer || 'Software Developer';
  
  // Calculate improvement based on selected skills
  const baseImprovement = Math.min(100, Math.max(15, skills.length * 8 + 15));

  // Generate context-aware missing skills based on career
  const careerSkillMap = {
    'Frontend Developer': ['React.js', 'TypeScript', 'Redux', 'Next.js', 'Vue.js'],
    'Backend Developer': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker'],
    'UI/UX Designer': ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
    'Data Analyst': ['Python', 'SQL', 'Tableau', 'Excel', 'Statistics'],
    'Product Manager': ['Agile', 'Scrum', 'Product Strategy', 'Analytics', 'Stakeholder Management'],
    'Digital Marketer': ['SEO', 'Google Analytics', 'Content Marketing', 'Social Media', 'PPC']
  };

  const possibleSkills = careerSkillMap[career] || ['React.js', 'TypeScript', 'Redux', 'Next.js'];
  const missingSkills = possibleSkills.filter((s) => !skills.includes(s));
  
  // Ensure we always have at least one missing skill
  const nextBestSkill = missingSkills.length > 0 ? missingSkills[0] : possibleSkills[0];
  const finalMissingSkills = missingSkills.length > 0 ? missingSkills : [possibleSkills[0]];

  // Calculate success probability
  const successProbability = Math.min(95, Math.max(50, 60 + skills.length * 5));

  return {
    missingSkills: finalMissingSkills,
    nextBestSkill: nextBestSkill,
    improvement: baseImprovement,
    successProbability: successProbability,
    message: `${career} ke liye ${nextBestSkill} seekhne se career match ${baseImprovement}% improve hoga.`,
  };
};

/**
 * Resume Analysis Service (Mock)
 * Used in: ResumeAnalysis page
 */
export const geminiResumeAnalysis = async () => {
  // Return the same structure the UI expects
  return {
    strengthScore: 78,
    extractedSkills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Git', 'Agile'],
    experience: '2-3 years',
    gaps: ['TypeScript', 'AWS', 'Docker'],
    recommendations: [
      'Add TypeScript to improve your frontend development skills',
      'Learn cloud platforms like AWS for better job opportunities',
      'Include Docker for containerization knowledge',
    ],
    careerMatches: [
      { role: 'Frontend Developer', match: 85 },
      { role: 'Full Stack Developer', match: 72 },
      { role: 'Backend Developer', match: 65 },
    ],
  };
};

/**
 * Job Role Matching Service (Mock)
 * Used in: JobRoleMatching page
 */
export const geminiJobRoleMatching = async () => {
  return [
    {
      role: 'Frontend Developer',
      match: 82,
      ready: true,
      missingSkills: ['TypeScript'],
      salary: '₹8-15 LPA',
    },
    {
      role: 'UI Engineer',
      match: 76,
      ready: true,
      missingSkills: ['Figma'],
      salary: '₹6-12 LPA',
    },
    {
      role: 'Web Designer',
      match: 69,
      ready: false,
      missingSkills: ['Adobe XD', 'Illustrator'],
      salary: '₹5-10 LPA',
    },
    {
      role: 'Full Stack Developer',
      match: 65,
      ready: false,
      missingSkills: ['MongoDB', 'Express'],
      salary: '₹10-20 LPA',
    },
  ];
};

/**
 * Career Path Recommendations Service (Mock)
 * Used in: CareerMapper page
 */
export const geminiCareerPathRecommendation = async () => {
  return [
    {
      name: 'Frontend Developer',
      matchScore: 85,
      requiredSkills: ['JavaScript', 'React', 'HTML', 'CSS'],
      matchingInterests: ['Software Development', 'Engineering'],
      salary: {
        entry: '₹4-8 LPA',
        mid: '₹8-15 LPA',
        senior: '₹15-30 LPA',
      },
      description: 'You have solid frontend potential. With some focused learning, you can quickly become job-ready.',
    },
    {
      name: 'UI/UX Designer',
      matchScore: 78,
      requiredSkills: ['UI/UX Design', 'Figma', 'Creativity'],
      matchingInterests: ['Design', 'Creative Arts'],
      salary: {
        entry: '₹3-6 LPA',
        mid: '₹6-12 LPA',
        senior: '₹12-25 LPA',
      },
      description: 'Your creative side aligns well with UI/UX roles. Design tools and user-centric thinking will help you grow.',
    },
    {
      name: 'Full Stack Developer',
      matchScore: 72,
      requiredSkills: ['JavaScript', 'React', 'Node.js', 'SQL'],
      matchingInterests: ['Software Development', 'Engineering'],
      salary: {
        entry: '₹5-9 LPA',
        mid: '₹9-18 LPA',
        senior: '₹18-35 LPA',
      },
      description: 'With both frontend and backend skills, you can aim for full-stack roles over time.',
    },
  ];
};

/**
 * Market Insights Service (Mock)
 * Used in: MarketInsights page (if wired)
 */
export const geminiMarketInsights = async (city, skill) => {
  return {
    demand: 'High',
    salaryRange: '₹8-15 LPA',
    growthTrend: 'Growing',
    topCompanies: ['Tech Corp', 'Startup Labs', 'InnovateX'],
    insights: [
      `${city || 'Major Indian cities'} show strong demand for ${skill || 'this skill'}.`,
      'Companies prefer candidates with strong project portfolios.',
      'Upskilling in modern tools and frameworks can significantly boost opportunities.',
    ],
  };
};
