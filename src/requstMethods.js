import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzJjODYzNzNlMjhkZjdkYTBkNWRkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDE1NTMwMiwiZXhwIjoxNjQwNDE0NTAyfQ.tCFJuJbCVw2Nn - CYt3uCfGFmzIq -QxJoO8E2_XQQ5_Y';

// const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
