import axios from "axios";
const url = "https://api.disneyapi.dev/characters";

const getAll = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};


export default {getAll};