import axios from "axios";

//01001000/json/

const api = axios.create({
    baseUrl: "https://viacep.com.br/ws/"
});

export default api;