import {eventsReducer} from '/projects/React.Events/react.events/src/slices/eventsSlice'
import {authReducer} from "./slices/authSlice";
import {addEventReducer} from "./slices/addEventSlice";
import {eventReducer} from "./slices/eventSlice";


const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer: {
        eventsState: eventsReducer,
        authState: authReducer,
        addEventState: addEventReducer,
        eventState: eventReducer
    },
    devTools: true
});

export default store;