import {createSlice} from "@reduxjs/toolkit";
import {UserFakeData} from "../../containers/FakeData/UserFakeData";

export const userSlice = createSlice({
    name:'users',
    initialState:{value:UserFakeData},
    reducers:{
        addUser:(state,action) =>{
            // state.value.push(action.payload)
        },
    },
});

// export const {addUser} = userSlice.actions
export default userSlice.reducer;