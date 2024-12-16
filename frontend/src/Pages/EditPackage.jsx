import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL } from '../contants';

const EditPackage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { data } = location.state || {};
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [price, setPrice] = useState(data.price);
  const [startavailableDate, setStartavailableDate] = useState(
    data.startavailableDate,
  );
  const [endavailableDate, setendavailableDate] = useState(
    data.endavailableDate,
  );
  const id = data.id;
  const handleImageChange = (e) => {
    setImages(e.target.files);
  };
  const handleClick = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
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

    const formData = new FormData();

    if (images.length) {
      Array.from(images).forEach((file) => {
        formData.append('image', file);
      });
    }

    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('startavailableDate', startavailableDate);
    formData.append('endavailableDate', endavailableDate);

    try {
      await axios.put(BASE_URL + `/admin/packages/${id}`, formData, {
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
              value={title}
              className="p-2 text-black bg-gray-200 rounded-md focus:outline-none focus:border-none"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg tracking-wide">Description</label>
            <textarea
              value={description}
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
              value={price}
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
              value={startavailableDate}
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
              value={endavailableDate}
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

export default EditPackage;
