import axios from 'axios';

const instance = axios.create({
     baseURL: "https://collectionapi.metmuseum.org/public/collection/v1",
});

export default instance;
