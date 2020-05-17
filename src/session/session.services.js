import axios from "axios";

export const services = {
    backEndLogin: (token) =>  axios.post('http://localhost:8000/api/google/login/', {id_token: token})
};