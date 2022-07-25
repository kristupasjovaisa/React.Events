import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import eventService from "../services/event.service";

export const addEvent = createAsyncThunk(
    "event/add",
    async ({name, location, category, price, startEventDateTime, endEventDateTime, description}) => {
        return await eventService.addEvent(name, location, category, price, startEventDateTime, endEventDateTime, description);
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
        [addEvent.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addEvent.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        [addEvent.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.event = action.payload;
            state.errorMessage = null;
        }
    },
});

export const eventReducer = eventSlice.reducer;