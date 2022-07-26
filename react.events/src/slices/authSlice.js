import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

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
            return await AuthService.login(nickname, password);
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        user: JSON.parse(localStorage.getItem("user")),
        errorMessage: null
    },
    extraReducers: {
        // TODO: Implemented RegisterPage!!!
        // [register.fulfilled]: (state, action) => {
        //     state.isLoading = false;
        // },
        // [register.rejected]: (state, action) => {
        //     state.isLoading = false;
        // },
        [login.pending]: (state, action) => {
            state.isLoading = true;
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.errorMessage = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.user = null;
            state.errorMessage = null;
        },
    },
});

export const authReducer = authSlice.reducer;