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
    async ({name, location, category, price, startEventDateTime, endEventDateTime, description}) => {
        return await eventService.updateEvent(name, location, category, price, startEventDateTime, endEventDateTime, description);
    }
);

export const deleteEvent = createAsyncThunk(
    "event/delete",
    async () => {
        return await eventService.deleteEvent();
    }
);

const eventSlice = createSlice({
    name: "event",
    initialState: {
        isLoading: false,
        event: null,
        errorMessage: null
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
            state.isUpdate = false;
        },
        [updateEvent.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isUpdate = true;
            state.errorMessage = null;
        },
        [deleteEvent.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.event = null;
            state.errorMessage = null;
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