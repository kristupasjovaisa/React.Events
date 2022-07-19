import {createSlice} from '@reduxjs/toolkit';
import {EventsData} from '/projects/React.Events/react.events/src/containers/FakeData/FakeData'

export const eventsSlice = createSlice({
    name:'events',
    initialState:{value: EventsData},
    reducers: {
        addEvent: (state, action) => {
            state.value.push(action.payload)
        },
    },
});

export const {addEvent} = eventsSlice.actions
export default eventsSlice.reducer;