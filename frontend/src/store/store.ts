import { configureStore } from "@reduxjs/toolkit"
import authReducer from './slices/auth.slice'
import propertyReducer from "./slices/property.slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        property: propertyReducer

    }
})
