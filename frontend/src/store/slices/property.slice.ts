import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axiosInstance";
import { endPoint } from "../../services/helper/apiEndPoint";
import { getErrorMessage } from "../../services/helper/global.helper";

export type PropertyItem = {
    _id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    image: string | null;
    likesCount: number;
};

type PropertyState = {
    loading: boolean;
    error: string | null;
    items: PropertyItem[];
};

const initialState: PropertyState = {
    loading: false,
    error: null,
    items: []
};

export const getProperties = createAsyncThunk(
    "property/list",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(endPoint.properties.list);
            return response.data as PropertyItem[];
        } catch (error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

const propertySlice = createSlice({
    name: "property",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProperties.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getProperties.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as string) ?? "Unable to fetch properties";
            });
    }
});

export default propertySlice.reducer;
