export const swaggerSpec = {
    openapi: "3.0.3",
    info: {
        title: "Real Estate API",
        version: "1.0.0",
        description: "API documentation for auth and property management"
    },
    servers: [
        {
            url: "http://localhost:5000",
            description: "Local server"
        }
    ],
    tags: [
        { name: "Auth", description: "Authentication endpoints" },
        { name: "Property", description: "Property endpoints" }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        },
        schemas: {
            RegisterRequest: {
                type: "object",
                required: ["name", "email", "password"],
                properties: {
                    name: { type: "string", example: "John Doe" },
                    email: { type: "string", format: "email", example: "john@example.com" },
                    password: { type: "string", example: "123456" },
                    role: {
                        type: "string",
                        enum: ["user", "agent", "admin"],
                        example: "user"
                    }
                }
            },
            VerifyEmailRequest: {
                type: "object",
                required: ["email", "otp"],
                properties: {
                    email: { type: "string", format: "email", example: "john@example.com" },
                    otp: { type: "string", example: "123456" }
                }
            },
            LoginRequest: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: { type: "string", format: "email", example: "john@example.com" },
                    password: { type: "string", example: "123456" }
                }
            },
            CreatePropertyRequest: {
                type: "object",
                required: ["title", "description", "price", "address"],
                properties: {
                    title: { type: "string", example: "2BHK Apartment" },
                    description: { type: "string", example: "Near metro station" },
                    price: { type: "number", example: 7500000 },
                    address: { type: "string", example: "Kolkata, India" }
                }
            },
            UpdatePropertyRequest: {
                type: "object",
                properties: {
                    title: { type: "string", example: "3BHK Apartment" },
                    description: { type: "string", example: "Renovated recently" },
                    price: { type: "number", example: 8200000 },
                    address: { type: "string", example: "New Town, Kolkata" }
                }
            }
        }
    },
    paths: {
        "/api/auth/register": {
            post: {
                tags: ["Auth"],
                summary: "Register user/agent/admin",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/RegisterRequest" }
                        }
                    }
                },
                responses: {
                    "201": { description: "Registered successfully" },
                    "400": { description: "Validation or duplicate user error" },
                    "500": { description: "Server error" }
                }
            }
        },
        "/api/auth/verify-email": {
            post: {
                tags: ["Auth"],
                summary: "Verify user email with OTP",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/VerifyEmailRequest" }
                        }
                    }
                },
                responses: {
                    "200": { description: "Email verified successfully" },
                    "400": { description: "Invalid or expired OTP" },
                    "404": { description: "User not found" },
                    "500": { description: "Server error" }
                }
            }
        },
        "/api/auth/login": {
            post: {
                tags: ["Auth"],
                summary: "Login and get JWT token",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/LoginRequest" }
                        }
                    }
                },
                responses: {
                    "200": { description: "Login successful" },
                    "400": { description: "Invalid credentials / unverified email" },
                    "404": { description: "User not found" },
                    "500": { description: "Server error" }
                }
            }
        },
        "/api/properties": {
            get: {
                tags: ["Property"],
                summary: "Get all properties",
                responses: {
                    "200": { description: "List of properties" },
                    "500": { description: "Server error" }
                }
            },
            post: {
                tags: ["Property"],
                summary: "Create property (agent/admin)",
                security: [{ bearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/CreatePropertyRequest" }
                        }
                    }
                },
                responses: {
                    "201": { description: "Property created" },
                    "401": { description: "Unauthorized" },
                    "403": { description: "Forbidden" },
                    "500": { description: "Server error" }
                }
            }
        },
        "/api/properties/{id}": {
            get: {
                tags: ["Property"],
                summary: "Get property by ID",
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        required: true,
                        schema: { type: "string" }
                    }
                ],
                responses: {
                    "200": { description: "Property details" },
                    "404": { description: "Property not found" },
                    "500": { description: "Server error" }
                }
            },
            put: {
                tags: ["Property"],
                summary: "Update property (agent/admin, owner or admin)",
                security: [{ bearerAuth: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        required: true,
                        schema: { type: "string" }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/UpdatePropertyRequest" }
                        }
                    }
                },
                responses: {
                    "200": { description: "Property updated" },
                    "401": { description: "Unauthorized" },
                    "403": { description: "Forbidden" },
                    "404": { description: "Property not found" },
                    "500": { description: "Server error" }
                }
            },
            delete: {
                tags: ["Property"],
                summary: "Delete property (agent/admin, owner or admin)",
                security: [{ bearerAuth: [] }],
                parameters: [
                    {
                        in: "path",
                        name: "id",
                        required: true,
                        schema: { type: "string" }
                    }
                ],
                responses: {
                    "200": { description: "Property deleted" },
                    "401": { description: "Unauthorized" },
                    "403": { description: "Forbidden" },
                    "404": { description: "Property not found" },
                    "500": { description: "Server error" }
                }
            }
        }
    }
};
