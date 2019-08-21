import axios from 'axios';


const baseUrl = 'http://localhost:9000/';


export default {
    register(body) {
        return axios.post(`${baseUrl}auth/register`, body);
    },

     login(body) {
        return axios.post(`${baseUrl}auth/login`, body);
    }
}