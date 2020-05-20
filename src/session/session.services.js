import axios from "axios";

const baseUrl = "http://localhost:8000/api/";
//todo arreglar token y hhttputils

export const services = {
    backEndLogin: (token) =>  axios.post(baseUrl + 'google/login/', {id_token: token}),
    registerToPlay: (token) => axios.post(baseUrl + 'waiting_user/', null, {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}}),
};