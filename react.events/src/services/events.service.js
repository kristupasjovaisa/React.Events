import apiClient from "../api/apiClient";

class EventsService {
    getAllEvents = () => apiClient().get('events');
}

export default new EventsService();