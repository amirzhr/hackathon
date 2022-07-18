import axios from "axios";

// let page = 1;
const baseUrl = "https://api.disneyapi.dev/characters/";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
}

export default {getAll};