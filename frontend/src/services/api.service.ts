import { axiosInstance } from "../lib/axiosInstance";
import { endPoint } from "./helper/apiEndPoint";
import type { Loginformvalue, signupformvalue } from "../type/interface/auth.interface";

export const apiService = {
    auth: {
        register: (data: signupformvalue) => axiosInstance.post(endPoint.auth.signup, data),
        verifyEmail: (data: { email: string; otp: string }) => axiosInstance.post(endPoint.auth.verifyEmail, data),
        login: (data: Loginformvalue) => axiosInstance.post(endPoint.auth.login, data),
        forgotPassword: (data: { email: string }) => axiosInstance.post(endPoint.auth.forgotPassword, data),
        resetPassword: (data: { email: string; otp: string; newPassword: string }) =>
            axiosInstance.post(endPoint.auth.resetPassword, data)
    },
    properties: {
        getAll: () => axiosInstance.get(endPoint.properties.list),
        getById: (id: string) => axiosInstance.get(endPoint.properties.byId(id)),
        create: (formData: FormData) => axiosInstance.post(endPoint.properties.create, formData),
        update: (id: string, formData: FormData) => axiosInstance.put(endPoint.properties.update(id), formData),
        remove: (id: string) => axiosInstance.delete(endPoint.properties.remove(id)),
        toggleLike: (id: string) => axiosInstance.post(endPoint.properties.toggleLike(id))
    },
    users: {
        getProfile: (id: string) => axiosInstance.get(endPoint.users.profileById(id)),
        updateProfile: (formData: FormData) => axiosInstance.put(endPoint.users.updateProfile, formData),
        toggleFavorite: (propertyId: string) => axiosInstance.post(endPoint.users.toggleFavorite(propertyId)),
        getFavorites: () => axiosInstance.get(endPoint.users.favorites)
    }
};
