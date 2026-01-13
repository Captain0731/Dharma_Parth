import api from './api';

export const resumeService = {
  analyzeResume: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await api.post('/api/resume/analyze', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getHistory: async () => {
    const response = await api.get('/api/resume/history');
    return response.data;
  },
};

