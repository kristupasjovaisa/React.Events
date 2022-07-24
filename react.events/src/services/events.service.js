import apiClient from "../api/apiClient";

class EventsService {
    getAllEvents = () => apiClient().get();
}

export default new EventsService();