import axios from 'axios';

const rest = axios.create({
    baseURL: 'http://localhost:3001/'
});

export default rest;