import authHeaderService from '/projects/React.Events/react.events/src/services/auth.header.service'
import axios from "axios";

const API_URL = "http://localhost:8080/api/";



const addEvent = (name,location,category,price,startEventDateTime,endEventDateTime,description) => {
    return axios
        .post(API_URL + "events", {
            headers: authHeaderService(),
            name,
            location,
            category,
            price,
            startEventDateTime,
            endEventDateTime,
            description
        })
        .then((response) => response.data)
};

const eventService = {
    addEvent
};

export default eventService;