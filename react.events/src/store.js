import {eventReducer} from '/projects/React.Events/react.events/src/slices/eventsSlice'
import authReducer from "./slices/authSlice";

const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer: {
        eventsState: eventReducer,
        authState: authReducer
    },
    devTools: true
});

export default store;