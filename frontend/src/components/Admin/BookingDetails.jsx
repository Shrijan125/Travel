import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../contants';
import toast from 'react-hot-toast';

const BookingDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + '/bookings')
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return <div className="pb-20 mt-8 text-xl text-white">Booking Details
  <div>
  <table className="w-full text-white  border-gray-300 border-[0.5px]">
        <thead>
          <tr className="text-left border-b border-gray-300 border-[0.5px]">
            <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">
              Package Id
            </th>
            <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">
              Name
            </th>
            <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">
              Email
            </th>
            <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">
              Phone
            </th>
            <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">
              Number of Travellers
            </th>
            <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">Special Requests</th>
            <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">Transaction Date</th>
            <th className="px-4 py-2">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                className="border-b border-gray-300 border-[0.5px]"
                key={index}
              >
                <td className="px-4 py-2 border-b border-r border-gray-300 border-[0.5px]">
                  {item.packageId}
                </td>
                <td className="px-4 py-2 border-b border-r border-gray-300 border-[0.5px]">
                  {item.name}
                </td>
                <td className="px-4 py-2 border-b border-r border-gray-300 border-[0.5px]">
                  {item.email}
                </td>
                <td className="px-4 py-2 border-b border-r border-gray-300 border-[0.5px]">
                  {item.phone}
                </td>
                <td className="px-4 py-2 border-r">
                  {item.numberofTravellers}
                </td>
                <td className="px-4 py-2 border-r">
                {item.specialRequest}
                </td>
                <td className="px-4 py-2 border-r">
                {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                {item.amountPaid}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  </div>
  </div>;
};

export default BookingDetails;
