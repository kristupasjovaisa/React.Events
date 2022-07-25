import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import addEventService from "../services/add.event.service";

export const addEvent = createAsyncThunk(
    "event/add",
    async ({name, location, category, price, startEventDateTime, endEventDateTime, description}) => {
        return await addEventService.addEvent(name, location, category, price, startEventDateTime, endEventDateTime, description);
    }
);

const addEventSlice = createSlice({
    name: "addEvent",
    initialState: {
        isLoading: false,
        isAdded: false,
        errorMessage: null
    },
    extraReducers: {
        [addEvent.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addEvent.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
            state.isAdded = false;
        },
        [addEvent.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isAdded = true;
            state.errorMessage = null;
        }
    },
});

export const eventReducer = addEventSlice.reducer;