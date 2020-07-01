import axios from "axios";

const baseUrl = "http://localhost:5000/api/";
//todo arreglar token y hhttputils

export const services = {
    backEndLogin: (token) =>  axios.post(baseUrl + 'auth', {id_token: token}),
    getMyStats: (userId) => axios.post(baseUrl + 'stats', {user_id: userId}),
};
