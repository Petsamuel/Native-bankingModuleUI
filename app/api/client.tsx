import axios from 'axios';


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

if (!baseUrl) {
  throw new Error('BASE_URL is not defined in environment variables');
}

// Create axios instance with default config
const client = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token if available
client.interceptors.request.use(
  (config) => {
    // You can add auth tokens here
    // const token = await getAuthToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle common errors
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Redirect to login or refresh token
      console.log('Unauthorized access - redirect to login');
    }
    return Promise.reject(error);
  }
);

export default client;