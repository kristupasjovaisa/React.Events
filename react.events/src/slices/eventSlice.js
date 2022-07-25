import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import eventService from "../services/event.service";


export const getEvent = createAsyncThunk(
    'event/get',
    async (id) => {
        return await eventService.getEvent(id);
    }
)

export const updateEvent = createAsyncThunk(
    "event/update",
    async ({eventId,name, location, category, price, startEventDateTime, endEventDateTime, description}) => {
        return await eventService.updateEvent(eventId,name, location, category, price, startEventDateTime, endEventDateTime, description);
    }
);

export const deleteEvent = createAsyncThunk(
    "event/delete",
    async (id) => {
        return await eventService.deleteEvent(id);
    }
);

const eventSlice = createSlice({
    name: "event",
    initialState: {
        isLoading: false,
        event: null,
        errorMessage: null,
        shouldNavigateToEvents: false
    },
    extraReducers: {
        [getEvent.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.event = action.payload;
            state.errorMessage = null;
        },
        [getEvent.pending]: (state) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        [getEvent.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        [updateEvent.pending]: (state, action) => {
            state.isLoading = true;
        },
        [updateEvent.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        [updateEvent.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = null;
            state.shouldNavigateToEvents = true;
        },
        [deleteEvent.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.event = null;
            state.errorMessage = null;
            state.shouldNavigateToEvents = true;
        },
        [deleteEvent.pending]: (state, action) => {
            state.isLoading = true;
            state.errorMessage = null;
        },
        [deleteEvent.rejected]: (state, action) => {
            state.isLoading = false;
            state.event = action.payload;
            state.errorMessage = true;
        }
    },
});

export const eventReducer = eventSlice.reducer;