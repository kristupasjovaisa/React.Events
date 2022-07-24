import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
    "auth/register",
    async ({nickname, email, city, phoneNumber, password}, thunkAPI) => {
        try {
            const response = await AuthService.register(nickname, email, city, phoneNumber, password);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({nickname, password}, thunkAPI) => {
        try {
            const data = await AuthService.login(nickname, password);
            return {user: data};
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});

const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const authReducer = authSlice.reducer;