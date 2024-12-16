import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../contants';
import AdminButton from '../components/Admin/AdminButton';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL + '/packages').then((response) => {
      setPackages(response.data.data);
    });
  }, [packages]);
  return (
    <div className="w-screen h-screen bg-black">
      <div className="mx-auto max-w-screen-2xl">
        <h1 className="text-2xl text-gray-50">Admin Dashboard</h1>
        <div className="flex justify-between w-full">
          <div className="mt-5 mb-3 text-xl text-white">Available Packages</div>
          <button className="text-white rounded-md ">
            <div
              className="flex items-center justify-center gap-2"
              onClick={() => {
                navigate('/admin/add-package');
              }}
            >
              <Plus size={14}></Plus>
              Add New
            </div>
          </button>
        </div>
        <table className="w-full text-white  border-gray-300 border-[0.5px]">
          <thead>
            <tr className="text-left border-b border-gray-300 border-[0.5px]">
              <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">
                Title
              </th>
              <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">
                Description
              </th>
              <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">
                Price
              </th>
              <th className="px-4 py-2 border-r border-gray-300 border-[0.5px]">
                Available Dates
              </th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((item, index) => {
              return (
                <tr
                  className="border-b border-gray-300 border-[0.5px]"
                  key={index}
                >
                  <td className="px-4 py-2 border-b border-r border-gray-300 border-[0.5px]">
                    {item.title}
                  </td>
                  <td className="px-4 py-2 border-b border-r border-gray-300 border-[0.5px]">
                    {item.description}
                  </td>
                  <td className="px-4 py-2 border-b border-r border-gray-300 border-[0.5px]">
                    {item.price}
                  </td>
                  <td className="px-4 py-2 border-r">
                    {item.startavailableDate} - {item.endavailableDate}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex w-full gap-2">
                      <AdminButton
                        constructive={true}
                        text={'Edit'}
                        handleClick={() => {
                          const data = {
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            startavailableDate: item.startavailableDate,
                            endavailableDate: item.endavailableDate,
                            id: item._id,
                          };
                          navigate('/admin/edit-package', { state: { data } });
                        }}
                      ></AdminButton>
                      <AdminButton
                        handleClick={() => {
                          axios
                            .delete(BASE_URL + '/admin/packages/' + item._id)
                            .then((response) => {
                              setPackages(
                                packages.filter(
                                  (packageItem) => packageItem._id !== item._id,
                                ),
                              );
                            });
                        }}
                        constructive={false}
                        text={'Delete'}
                      ></AdminButton>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
