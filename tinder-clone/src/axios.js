import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://demo-tinder-mern-clone.herokuapp.com/'
});

export default instance;