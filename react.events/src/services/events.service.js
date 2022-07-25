import axios from "axios";
import authHeaderService from "./auth.header.service";

const API_URL = "http://localhost:8080/api/";

const getEvents = () => {
    return axios.get(API_URL + "events", { headers: authHeaderService()})
        .then((response) => response.data)
};

const eventsService = {
    getEvents
};

export default eventsService;