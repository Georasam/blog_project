import axios from 'axios';
const BASE_URL ='http://localhost:5050' /* 'https://boardgame-backend-mongodb.herokuapp.com'; */

export default axios.create({
    baseURL: BASE_URL
});
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});