import React, { useState } from 'react';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (adminId === '123' && password === '123') {
      navigate('/admin/home');
    }
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <div className="h-[400px] w-[400px] border-[0.5px] border-gray-300 rounded-md p-4">
        <div className="flex items-center justify-center">
          <img src="https://res.cloudinary.com/dkcnv8vgt/image/upload/v1734366667/iu549pmst9d1znuhycht.png"></img>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-gray-200">Admin ID</label>
            <input
              type="text"
              placeholder="123"
              onChange={(e) => {
                setAdminId(e.target.value);
              }}
              className="p-3 bg-gray-300 rounded-md focus:outline-none focus:border-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-200">Password</label>
            <input
              type="password"
              placeholder="123"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="p-3 bg-gray-300 rounded-md focus:outline-none focus:border-none"
            />
          </div>
          <div className="mt-4"></div>
          <Button button_text={'Sign In'} handleClick={handleClick}></Button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
