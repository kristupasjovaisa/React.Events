import {eventReducer} from '/projects/React.Events/react.events/src/redux/Slices/eventsSlice'
const configureStore = require('@reduxjs/toolkit').configureStore



const store = configureStore({
    reducer: {
        eventsState: eventReducer,
    }
});

export default store;