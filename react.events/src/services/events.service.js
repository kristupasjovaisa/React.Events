import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8080/api/";

const getEvents = () => {
    return axios.get(API_URL + "events", { headers: authHeader()})
        .then((response) => response.data)
};

const eventsService = {
    getEvents
};

export default eventsService;