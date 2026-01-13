import api from './api';

export const marketService = {
  getInsights: async (career = 'UI/UX Designer', city = 'all') => {
    const response = await api.get('/api/market/insights', {
      params: { career, city },
    });
    return response.data;
  },
};

