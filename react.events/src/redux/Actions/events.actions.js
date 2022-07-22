const FETCH_EVENTS = 'FETCH_EVENTS'
const FETCHED_EVENTS_SUCCESS = 'FETCHED_EVENTS_SUCCESS'
const FETCHED_EVENTS_FAILURE = 'FETCHED_EVENTS_FAILURE'


const fetchEvents = () => {
    return {
        type: FETCH_EVENTS
    }
};

const fetchedEventsSuccess = (events) => {
    return {
        type: FETCHED_EVENTS_SUCCESS,
        payload: events
    }
};

const fetchedEventsFailure = (errorMessage) => {
    return {
        type: FETCHED_EVENTS_FAILURE,
        payload: errorMessage
    }
};

export default {
    fetchEvents,
    fetchedEventsSuccess,
    fetchedEventsFailure
}