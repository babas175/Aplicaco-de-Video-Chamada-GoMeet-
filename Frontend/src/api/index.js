import axios from 'axios';

const rest = axios.create({
    baseURL: 'http://localhost:8000/'
});

export default rest;