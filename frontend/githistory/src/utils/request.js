import axios from 'axios';
const service = axios.create({
	baseURL: 'http://0.0.0.0:8001/api',
    'Access-Control-Allow-Origin': '*',
	timeout: 2000
});

// request interceptor
service.interceptors.request.use(
	config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;