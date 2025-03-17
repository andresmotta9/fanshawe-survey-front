const API_BASE_URL = 'http://localhost:3000/api';

const API_ENDPOINTS = {
  USERS: `${API_BASE_URL}/users`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  DIPLOMAS: `${API_BASE_URL}/diplomas`,
  QUESTIONS: `${API_BASE_URL}/questions`,
  ANSWERS: `${API_BASE_URL}/answers`,
  COURSES: `${API_BASE_URL}/courses`,
};

export const API_KEYS = {
  USERS: 'USERS',
  LOGIN: 'LOGIN',
  DIPLOMAS: 'DIPLOMAS',
  QUESTIONS: 'QUESTIONS',
  ANSWERS: 'ANSWERS',
  COURSES: 'COURSES',
};

export default API_ENDPOINTS;
