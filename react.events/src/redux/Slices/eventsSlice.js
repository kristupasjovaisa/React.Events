import {createSlice} from '@reduxjs/toolkit';

export const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        isLoading: false,
        events: null,
        errorMessage: null
    },
    reducers: {
        fetch: (state) => {
            state.isLoading = true
        },
        fetchedSuccess: (state, action) => {
            state.isLoading = false
            state.events = action.payload
            state.errorMessage = null
        },
        fetchedFailure: (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        }
    },
});

export default eventsSlice.reducer;
export const {fetch,fetchedSuccess,fetchedFailure} = eventsSlice.actions