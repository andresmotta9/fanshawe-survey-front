const API_BASE_URL = 'http://localhost:3000/api';

const API_ENDPOINTS = {
  USERS: `${API_BASE_URL}/users`, // Fetch all users (admins in this case)
  LOGIN: `${API_BASE_URL}/auth/login`,
  DIPLOMAS: `${API_BASE_URL}/diplomas`,
  QUESTIONS_FIELDS: `${API_BASE_URL}/fields/questions`,
  ANSWER_FIELDS: `${API_BASE_URL}/fields/determine`,
  PROGRAM_RESULTS: `${API_BASE_URL}/fields/questions/program-result`,
  ANSWERS: `${API_BASE_URL}/answers`,
};

export default API_ENDPOINTS;
