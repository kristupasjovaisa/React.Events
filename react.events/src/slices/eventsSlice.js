import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const axios =require('axios')

export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async () => {
        const response = await axios.get('http://localhost:8080/api/events')
        return response.data
    }
)

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
            state.events = action.payload.events
            state.errorMessage = null
        })
        builder.addCase(fetchEvents.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
    },
});

export const eventReducer = eventsSlice.reducer;