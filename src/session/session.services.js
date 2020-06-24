import axios from "axios";

const baseUrl = "https://ac16b8c47d1e.ngrok.io/api/";

//todo arreglar token y hhttputils

export const services = {
    backEndLogin: (token) =>  axios.post(baseUrl + 'auth', {id_token: token}),
    registerToPlay: (token) => axios.post(baseUrl + 'waiting_user/', null, {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}}),
};