const EVENTS_FETCH = 'EVENTS_FETCH'
const EVENTS_FETCH_SUCCESS = "EVENTS_FETCH_SUCCESS"
const EVENTS_FETCH_ERROR = "EVENTS_FETCH_ERROR"


const eventsFetch = () => {
    return {
        type: EVENTS_FETCH
    }
};

const eventsFetchSuccess = (events) => {
    return {
        type: EVENTS_FETCH_SUCCESS,
        payload: events
    }
};

const eventsFetchError = (errorMessage) => {
    return {
        type: EVENTS_FETCH_ERROR,
        payload: errorMessage
    }
};

export default {
    eventsFetch,
    eventsFetchSuccess,
    eventsFetchError
}