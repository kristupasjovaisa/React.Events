import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import eventsService from "../services/events.service";

export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async () => {
        return await eventsService.getEvents();
    }
)

const eventsSlice = createSlice({
    name: 'eventsSlice',
    initialState: {
        isLoading: false,
        events: [],
        errorMessage: null
    },
    extraReducers: {
        [fetchEvents.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchEvents.fulfilled]: (state, action) => {
            state.isLoading = false
            state.events = action.payload.events
            state.errorMessage = null
        },
        [fetchEvents.rejected]: (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        },
    },
});

export const eventsReducer = eventsSlice.reducer;