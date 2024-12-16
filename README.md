# Travel Agency Website

## Project Description
This repo contains the backend and frontend for travel agency where users can view and book packages according to their choice and admin can view the analytics of booking along with adding, removing and updating the packages.
The frontend is built on React (Vite) and backend is build using nodejs and express. 

## Setup Instructions

### Prerequisite
1. Node.js must be installed.
2. The repository must be cloned.
### 1. Backend

1. `cd backend`
2. `npm i`
3. Create a `.env` file and copy the content of `.env.example` into it.
4. Fill all the fields in the `.env` file.
5. Run `npm run dev`.

### 2. Frontend

1. `cd frontend`
2. `npm i`
3. Create a `.env` file and copy the content of `.env.example` into it.
4. Fill all the fields in the `.env` file. Make sure to use the same port number for `VITE_API_URI` as used in the backend.
5. Run `npm run dev`.

### Bonus Features Implemented
- [x] Search and filter functionality for tour packages using price
- [x] Pagination for large data sets.
- [x] Generate downloadable PDF invoices using jspdf
- [x] Analytics for admin panel using recharts


## Features Implemented
### 1. User Features
- **Browse Tour Packages**: Users can view a list of available tour packages.
- **Package Details**: Users can view details of a specific tour package.
- **Package Booking**: Users can submit a booking for a selected package.

### 2. Admin Features
- **Add New Package**: Admin can add a new travel package.
- **Update Existing Package**: Admin can update details of an existing package.
- **Delete Package**: Admin can remove a package from the system.
- **View Bookings**: Admin can view all bookings made by users.
- **Booking Analytics**: Admin can view analytics regarding the number of bookings

### API Endpoints
- **GET /packages**: Retrieve all tour packages.
- **GET /packages/:id**: Retrieve details of a specific package.
- **POST /bookings**: Submit a package booking.

#### Admin Endpoints:
- **POST /admin/packages**: Add a new package.
- **PUT /admin/packages/:id**: Update an existing package.
- **DELETE /admin/packages/:id**: Delete a package.
- **GET /admin/bookings**: Retrieve all booking details.
