import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8080/api/";

const getEvent = (id) => {
    return axios.get(API_URL + "events/" + id, {headers: authHeader()})
        .then((response) => response.data)
};

const updateEvent = (eventId, name, location, category, price, startEventDateTime, endEventDateTime, description) => {
    return axios
        .put(API_URL + "events", {
            eventId,
            name,
            location,
            category,
            price,
            startEventDateTime,
            endEventDateTime,
            description
        }, {headers: authHeader()})
        .then((response) => response.data)
};

const deleteEvent = (id) => {
    return axios.delete(API_URL + "events/" + id, {headers: authHeader()})
        .then((response) => response.data)
};

const eventService = {
    getEvent,
    updateEvent,
    deleteEvent
};

export default eventService;