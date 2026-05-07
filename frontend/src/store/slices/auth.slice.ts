import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axiosInstance";
import { endPoint } from "../../services/helper/apiEndPoint";
import { getErrorMessage } from "../../services/helper/global.helper";
import type { Loginformvalue, signupformvalue } from "../../type/interface/auth.interface";

type AuthUser = {
    id: string;
    name: string;
    email: string;
    role: string;
};

type AuthInitialState = {
    loading: boolean;
    error: string | null;
    token: string | null;
    user: AuthUser | null;
    message: string | null;
};

const initialState: AuthInitialState = {
    loading: false,
    error: null,
    token: localStorage.getItem("token"),
    user: null,
    message: null
};

export const signUp = createAsyncThunk(
    "auth/signup",
    async (data: signupformvalue, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(endPoint.auth.signup, data);
            return response.data;
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (data: Loginformvalue, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(endPoint.auth.login, data);
            return response.data as { token: string; user: AuthUser };
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

export const verifyEmail = createAsyncThunk(
    "auth/verifyEmail",
    async (data: { email: string; otp: string }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(endPoint.auth.verifyEmail, data);
            return response.data as { message: string };
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearAuthState: (state) => {
            state.error = null;
            state.message = null;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.error = null;
            state.message = null;
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload?.message ?? "Signup successful";
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as string) ?? "Signup failed";
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.message = "Login successful";
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as string) ?? "Login failed";
            })
            .addCase(verifyEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = null;
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as string) ?? "Email verification failed";
            });
    }
});

export const { logout, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
