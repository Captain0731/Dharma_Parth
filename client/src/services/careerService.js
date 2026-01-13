import api from './api';

export const careerService = {
  mapCareer: async (skills, interests, experienceLevel) => {
    const response = await api.post('/api/career/map', {
      skills,
      interests,
      experienceLevel,
    });
    return response.data;
  },

  skillPrediction: async (skills, targetCareer) => {
    const response = await api.post('/api/ai/skill-prediction', {
      skills,
      targetCareer,
    });
    return response.data;
  },

  jobMatch: async (skills, interests, experience) => {
    const response = await api.post('/api/job/match', {
      skills,
      interests,
      experience,
    });
    return response.data;
  },
};

