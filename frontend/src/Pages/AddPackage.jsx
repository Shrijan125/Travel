import React, { useState } from 'react';
import Button from '../components/Button/Button';
import axios from 'axios';
import { BASE_URL } from '../contants';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddPackage = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [startavailableDate, setStartavailableDate] = useState([]);
  const [endavailableDate, setendavailableDate] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const formData = new FormData();
  Array.from(images).forEach((file) => {
    formData.append('image', file);
  });
  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('startavailableDate', startavailableDate);
  formData.append('endavailableDate', endavailableDate);

  const handleClick = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      !images.length ||
      !title ||
      !description ||
      !price ||
      !startavailableDate ||
      !endavailableDate
    ) {
      toast.error('Please fill all the fields');
      setLoading(false);
      return;
    }

    try {
      await axios.post(BASE_URL + '/admin/packages', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/admin/home');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen text-white bg-black">
      <div className="max-w-screen-xl pt-10 translate-x-1/2 left-1/2">
        <form className="border-gray-300 border-[0.5px] rounded-md p-4 flex gap-2 flex-col w-[500px]">
          <div className="flex flex-col gap-1">
            <label className="text-lg tracking-wide">Images</label>
            <input
              name="images"
              type="file"
              multiple
              onChange={handleImageChange}
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg tracking-wide">Title</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Beaches & Goa"
              className="p-2 text-black bg-gray-200 rounded-md focus:outline-none focus:border-none"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg tracking-wide">Description</label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Want to spend this holiday in Goa!!!"
              className="p-2 text-black bg-gray-200 rounded-md bg focus:outline-none focus:border-none"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg tracking-wide">Price</label>
            <input
              type="text"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="4000"
              className="p-2 text-black bg-gray-200 rounded-md focus:outline-none focus:border-none"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg tracking-wide">Start Date</label>
            <input
              type="text"
              onChange={(e) => {
                setStartavailableDate(e.target.value);
              }}
              placeholder="15/12/2024"
              className="p-2 text-black bg-gray-200 rounded-md focus:outline-none focus:border-none"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg tracking-wide">End Date</label>
            <input
              type="text"
              onChange={(e) => {
                setendavailableDate(e.target.value);
              }}
              placeholder="20/12/2024"
              className="p-2 text-black bg-gray-200 rounded-md focus:outline-none focus:border-none"
            ></input>
          </div>
          <div className="mt-5"></div>
          <Button
            disabled={loading}
            button_text={'Add Package'}
            handleClick={handleClick}
          ></Button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
