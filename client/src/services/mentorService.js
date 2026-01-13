import api from './api';

export const mentorService = {
  getMentors: async (category = null) => {
    const params = category ? { category } : {};
    const response = await api.get('/api/mentors', { params });
    return response.data;
  },

  getMentor: async (mentorId) => {
    const response = await api.get(`/api/mentors/${mentorId}`);
    return response.data;
  },

  bookMentor: async (mentorId, date, time, sessionType, message = null) => {
    const response = await api.post('/api/mentors/book', {
      mentor_id: mentorId,
      date,
      time,
      session_type: sessionType,
      message,
    });
    return response.data;
  },

  verifyPayment: async (bookingId, paymentId, paymentMethod) => {
    const response = await api.post('/api/mentors/verify-payment', {
      booking_id: bookingId,
      payment_id: paymentId,
      payment_method: paymentMethod,
    });
    return response.data;
  },

  getMyBookings: async () => {
    const response = await api.get('/api/mentors/bookings/my');
    return response.data;
  },
};

