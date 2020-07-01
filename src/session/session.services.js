import axios from "axios";

// const baseUrl = "http://localhost:5000/api/";
const baseUrl = "http://ec2-54-237-31-62.compute-1.amazonaws.com:5000/api/";

//todo arreglar token y hhttputils

export const services = {
    backEndLogin: (token) =>  axios.post(baseUrl + 'auth', {id_token: token}),
    getMyStats: (userId) => axios.post(baseUrl + 'stats', {user_id: userId}),
};
