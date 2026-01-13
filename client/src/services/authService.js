import api from './api';

export const authService = {
  signup: async (name, email, password) => {
    const response = await api.post('/api/auth/signup', {
      name,
      email,
      password,
    });
    return response.data;
  },

  verifyOTP: async (email, otp) => {
    const response = await api.post('/api/auth/verify-otp', {
      email,
      otp,
    });
    return response.data;
  },

  login: async (email, password) => {
    const response = await api.post('/api/auth/login', {
      email,
      password,
    });
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await api.post('/api/auth/forgot-password', {
      email,
    });
    return response.data;
  },

  resetPassword: async (token, newPassword) => {
    const response = await api.post('/api/auth/reset-password', {
      token,
      new_password: newPassword,
    });
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get('/api/auth/me');
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  getStoredUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};

