const configureStore = require('@reduxjs/toolkit').configureStore
const eventReducer = require('../redux/Slices/eventsSlice')

const store = configureStore({
    reducer: {
        event: eventReducer,
    }
});

export default store;