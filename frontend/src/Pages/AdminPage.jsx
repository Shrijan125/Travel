import React from 'react';
import { PackagesTable } from '../components/Admin/PackagesTable';
import AdminGraph from '../components/Admin/AdminGraph';
import BookingDetails from '../components/Admin/BookingDetails';
const AdminPage = () => {
  return (
    <div className="w-screen h-full bg-black">
      <div className="mx-auto max-w-screen-2xl">
        <h1 className="pt-4 text-2xl text-gray-50">Admin Dashboard</h1>
        <AdminGraph></AdminGraph>
        <PackagesTable></PackagesTable>
        <BookingDetails></BookingDetails>
      </div>
    </div>
  );
};

export default AdminPage;
