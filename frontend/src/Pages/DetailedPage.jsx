import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageViewer from '../components/ImageViewer/ImageViewer';
import NavBar from '../components/NavBar/NavBar';
import {
  Car,
  Cctv,
  Lamp,
  MinusCircle,
  Moon,
  PlusCircle,
  Star,
  UtensilsCrossed,
  Wifi,
} from 'lucide-react';
import LeftLeaf from '../components/SVG/LeftLeaf';
import RightLeaf from '../components/SVG/RightLeaf';
import Button from '../components/Button/Button';
import ModalForm from '../components/Modal/ModalForm';
import axios from 'axios';
import { BASE_URL } from '../contants';
import toast from 'react-hot-toast';

const DetailedPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [count, setguestCount] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios
      .get(BASE_URL + `/packages/${id}`)
      .then((response) => {
        setData(response.data.data);
        setTotal(response.data.data.price);
        setImages(response.data.data.images);
      })
      .catch((error) => {
        toast(error.message);
      });
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const calculateAmount = () => {
    setTotal(count * data.price);
  };

  useEffect(() => {
    calculateAmount();
  }, [count]);

  const increment = () => {
    if (count >= 15) {
      setguestCount(15);
      return;
    }
    setguestCount(count + 1);
  };

  const decrement = () => {
    if (count <= 1) {
      setguestCount(1);
      return;
    }
    setguestCount(count - 1);
  };

  const list_items = [
    { title: `5 Nights`, icon: <Moon /> },
    { title: 'Kitchen', icon: <UtensilsCrossed /> },
    { title: 'Dedicated workspace', icon: <Lamp /> },
    { title: 'Wifi', icon: <Wifi /> },
    { title: 'Free Parking', icon: <Car /> },
    { title: 'Exterior security cameras on property', icon: <Cctv /> },
  ];
  return (
    <div>
      <NavBar withImage={false}></NavBar>
      <div className="max-w-screen-xl px-4 m-8 mx-auto xl:px-0">
        <h1 className="text-2xl font-semibold capitalize">{data.title}</h1>
        <ImageViewer images={images}></ImageViewer>
        <div className="grid w-full grid-cols-1 gap-8 mt-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-around h-20 border border-gray-300 rounded-md">
              <div className="flex items-center gap-2">
                <LeftLeaf></LeftLeaf>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-semibold leading-3 tracking-tighter sm:text-lg">
                    Guest's
                  </span>
                  <span className="font-semibold tracking-wide sm:text-lg">
                    Favourite
                  </span>
                </div>
                <RightLeaf></RightLeaf>
              </div>
              <div className="flex-col hidden font-semibold leading-tight tracking-wide lg:flex">
                <span>One of the most loving place</span>
                <span>on our platform.</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold sm:text-lg">5.0</span>
                <span className="flex text-sm underline">
                  <Star size={14} fill="#111"></Star>
                  <Star size={14} fill="#111"></Star>
                  <Star size={14} fill="#111"></Star>
                  <Star size={14} fill="#111"></Star>
                  <Star size={14} fill="#111"></Star>
                </span>
              </div>
              <div className="w-[0.5px] h-14 bg-black"></div>
              <div className="flex flex-col items-center">
                <span className="font-bold sm:text-lg">6</span>
                <span className="text-sm leading-tight underline">Reviews</span>
              </div>
              <div></div>
            </div>
            <p className="text-justify text-gray-700">{data.description}</p>
            <div className="w-full h-[0.5px] bg-gray-300  mt-2"></div>
            <div>
              <span className="text-xl">What this place offers</span>
              <ul className="mt-4 space-y-2">
                {list_items.map((item, index) => {
                  return (
                    <li key={index}>
                      {
                        <div className="flex items-center gap-2">
                          <span>{item.icon}</span>
                          <span>{item.title}</span>
                        </div>
                      }
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full h-[500px] mt-10">
            <div className="sm:w-[70%] w-full h-full mx-auto  rounded-md border border-gray-300/80 shadow-lg p-4">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-semibold tracking-wider">
                  ₹{data.price}
                </span>
                <span>night</span>
              </div>
              <div className="grid grid-cols-2 mt-4 border border-black rounded-md">
                <div className="p-4 border-b border-r border-black">
                  <div className="">
                    <div className="text-xs font-semibold uppercase">
                      Check-in
                    </div>
                    <span className="text-xs font-bold uppercase">
                      {data.startavailableDate}
                    </span>
                  </div>
                </div>
                <div className="p-4 border-b border-black">
                  <div className="text-xs font-semibold uppercase">
                    CheckOut
                  </div>
                  <span className="text-xs font-bold uppercase">
                    {data.endavailableDate}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold uppercase">Guest</div>
                  <div className="flex justify-between w-full text-xs font-bold uppercase">
                    <div>{count} guest</div>
                    <div className="flex items-center gap-1 select-none">
                      <MinusCircle
                        onClick={decrement}
                        className="hover:cursor-pointer"
                      ></MinusCircle>
                      1
                      <PlusCircle
                        onClick={increment}
                        className="hover:cursor-pointer"
                      ></PlusCircle>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-xs font-bold uppercase">total</div>
              <div className="mt-2 text-xl font-bold">₹ {total} </div>
              <div className="mt-2">
                <Button
                  handleClick={openModal}
                  button_text={'Book Now'}
                ></Button>
                {isModalOpen && (
                  <ModalForm
                    travelers={count}
                    closeModal={closeModal}
                    totalprice={total}
                    packageDetails={data._id}
                  ></ModalForm>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
