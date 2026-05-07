# Real Estate Platform

Full-stack real estate application with role-based authentication and property management.

- `frontend/`: React + Vite + Redux Toolkit
- `backend/`: Node.js + Express + TypeScript + MongoDB

## Features

- Role-based auth: `user`, `agent`, `admin`
- Common login for all roles
- Separate signup URLs by role
- Email verification with OTP
- Forgot/reset password with OTP
- Property listing and detail APIs
- Property CRUD (agent/admin only)
- Property like/favorite flows
- Profile update with image upload
- Swagger docs endpoint

## Role Model

Backend-supported roles:

- `user`: browse, like/favorite, buy flow on frontend
- `agent`: user abilities + property CRUD
- `admin`: user abilities + property CRUD + elevated control

Frontend route `/signup/super-admin` maps to backend role `admin`.

## Tech Stack

### Frontend

- React 19
- Vite
- TypeScript
- Redux Toolkit
- React Hook Form + Yup
- Axios
- Tailwind CSS

### Backend

- Express 5
- TypeScript
- MongoDB + Mongoose
- JWT auth
- Multer (image upload)
- Nodemailer (OTP email)
- Swagger UI

## Repository Structure

```text
real estate/
  backend/
    index.ts
    src/
      controllers/
      routes/
      models/
      middleware/
      utils/
  frontend/
    src/
      pages/
      store/
      services/
      Routes/
```

## Local Setup

## 1) Backend setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=<smtp_user_email>
SMTP_PASSWORD=<smtp_password_or_app_password>
EMAIL_FROM=<from_email>
SMTP_TIMEOUT_MS=10000
NODE_ENV=development
```

Run backend:

```bash
npm run dev
```

Backend default URL: `http://localhost:5000`

## 2) Frontend setup

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_LISTING_PROJECT_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

Frontend default URL: `http://localhost:5173`

## Auth & Route Flow (Frontend)

Common login page:

- `/login`

Separate signup pages:

- `/signup/user`
- `/signup/agent`
- `/signup/super-admin` (mapped to backend `admin` role)
- `/signup` redirects to `/signup/user`

Verification page:

- `/verify-email?email=<user_email>`

Flow:

1. Signup submits to `POST /api/auth/register`
2. User verifies OTP on `/verify-email` via `POST /api/auth/verify-email`
3. User logs in via `POST /api/auth/login`
4. JWT token is stored in localStorage and sent as `Authorization: Bearer <token>`

## API Base URL

All API routes are prefixed with:

- `/api/auth`
- `/api/properties`
- `/api/users`

When running locally, full base URL is usually: `http://localhost:5000`

## API Documentation Endpoint

- Swagger UI: `GET /api-docs`
- Swagger JSON: `GET /api-docs.json`

## Authentication

Protected endpoints require:

```http
Authorization: Bearer <jwt_token>
```

JWT payload includes:

- `id`
- `role`

## Complete API Endpoints

### Auth APIs

Base: `/api/auth`

1. `POST /register`
- Description: Create account with role (`user` default, `agent`, `admin`)
- Body:
```json
{
  "name": "Arijit",
  "email": "user@example.com",
  "password": "Arijit@123",
  "role": "user"
}
```
- Success: `201`
```json
{
  "message": "Registered successfully. Verify email.",
  "userId": "<mongodb_id>",
  "emailSent": true
}
```
- Dev fallback (email failure): still `201`, includes `emailSent:false` and `otp` in non-production.

2. `POST /verify-email`
- Body:
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```
- Success: `200`
```json
{
  "message": "Email verified successfully"
}
```

3. `POST /login`
- Body:
```json
{
  "email": "user@example.com",
  "password": "Arijit@123"
}
```
- Success: `200`
```json
{
  "message": "Login successful",
  "token": "<jwt>",
  "user": {
    "id": "<mongodb_id>",
    "name": "Arijit",
    "email": "user@example.com",
    "role": "user"
  }
}
```

4. `POST /forgot-password`
- Body:
```json
{
  "email": "user@example.com"
}
```
- Success: `200`
```json
{
  "message": "OTP sent to email",
  "email": "user@example.com",
  "emailSent": true
}
```
- Dev fallback on email failure: `emailSent:false` and non-production `otp`.

5. `POST /reset-password`
- Body:
```json
{
  "email": "user@example.com",
  "otp": "123456",
  "newPassword": "NewPass@123"
}
```
- Success: `200`
```json
{
  "message": "Password reset successful. You can now login."
}
```

### Property APIs

Base: `/api/properties`

1. `GET /`
- Description: List properties (public)

2. `GET /:id`
- Description: Get property by ID (public)

3. `POST /`
- Description: Create property
- Access: `agent`, `admin`
- Content type: `multipart/form-data`
- Fields: `title`, `description`, `price`, `address`, optional `image`

4. `PUT /:id`
- Description: Update property
- Access: `agent`, `admin` (owner/admin rules in controller)
- Content type: `multipart/form-data`

5. `DELETE /:id`
- Description: Delete property
- Access: `agent`, `admin` (owner/admin rules in controller)

6. `POST /:id/like`
- Description: Toggle like on property
- Access: authenticated users

### User APIs

Base: `/api/users`

1. `GET /profile/:id`
- Description: Get public user profile by ID

2. `PUT /profile/update`
- Description: Update own profile
- Access: authenticated users
- Content type: `multipart/form-data`
- Fields: `name`, `email`, optional profile `image`

3. `POST /favorites/:propertyId`
- Description: Toggle property favorite for logged-in user
- Access: authenticated users

4. `GET /favorites/my-list`
- Description: Get logged-in user favorites
- Access: authenticated users

## Frontend API Mapping

Main endpoint map lives in:

- `frontend/src/services/helper/apiEndPoint.ts`

Axios instance with auth header interceptor:

- `frontend/src/lib/axiosInstance.ts`

Redux auth logic:

- `frontend/src/store/slices/auth.slice.ts`

## Validation Rules (Current)

Signup frontend validation includes:

- `name` required
- valid `email`
- password min length 6
- password must include uppercase + special char
- `role` required

## Common Issues and Fixes

1. `Cannot GET /api/auth/register` on frontend route
- Cause: trying to browse API URL or wrong proxy rewrite
- Fix: open frontend page URL (`/signup/...`) in browser; API is called by form submit

2. Postman request sent to `http://localhost:5173/signup`
- Wrong target (frontend route)
- Use backend API URL: `http://localhost:5000/api/auth/register`

3. `Could not send verification email`
- SMTP issue
- In dev, backend now returns successful registration with fallback OTP response (non-production)

4. `/api/api/...` double prefix errors
- Ensure frontend base URL is host only (no trailing `/api`)
- `VITE_LISTING_PROJECT_URL=http://localhost:5000`

## Scripts

### Backend

```bash
npm run dev
npm run build
npm start
```

### Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Security Notes

- Never commit real `.env` secrets.
- Rotate exposed credentials immediately if they were committed.
- Use app passwords for Gmail SMTP.
- Use HTTPS and strict CORS in production.

## License

ISC (as configured in package metadata).
