import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import eventsService from "../../services/events.service";


export const fetchEvents = createAsyncThunk('event/fetchEvents', () => {
    eventsService.getAllEvents().then((response) => response.data)
});

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        isLoading: false,
        events: [],
        errorMessage: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.isLoading = false
            state.events = action.payload
            state.errorMessage = null
        })
        builder.addCase(fetchEvents.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
    },
});

export const eventReducer = eventsSlice.reducer;