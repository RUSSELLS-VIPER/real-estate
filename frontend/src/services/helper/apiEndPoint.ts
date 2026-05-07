export const endPoint = {
    auth: {
        signup: "/api/auth/register",
        verifyEmail: "/api/auth/verify-email",
        login: "/api/auth/login",
        forgotPassword: "/api/auth/forgot-password",
        resetPassword: "/api/auth/reset-password"
    },
    properties: {
        list: "/api/properties",
        byId: (id: string) => `/api/properties/${id}`,
        create: "/api/properties",
        update: (id: string) => `/api/properties/${id}`,
        remove: (id: string) => `/api/properties/${id}`,
        toggleLike: (id: string) => `/api/properties/${id}/like`
    },
    users: {
        profileById: (id: string) => `/api/users/profile/${id}`,
        updateProfile: "/api/users/profile/update",
        toggleFavorite: (propertyId: string) => `/api/users/favorites/${propertyId}`,
        favorites: "/api/users/favorites/my-list"
    }
};
