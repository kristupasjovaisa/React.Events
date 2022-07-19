import {createSlice} from "@reduxjs/toolkit";
import {UserFakeData} from "../../containers/FakeData/UserFakeData";

export const userSlice = createSlice({
    name:'users',
    initialState:{value:UserFakeData},
});

export default userSlice.reducer;