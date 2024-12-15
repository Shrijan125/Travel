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

const DetailedPage = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const price = 9820;
  const [count, setguestCount] = useState(1);
  const [total, setTotal] = useState(price);

  const calculateAmount = () => {
    setTotal(count * price);
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
    { title: '5 Nights in Udaipur', icon: <Moon /> },
    { title: 'Kitchen', icon: <UtensilsCrossed /> },
    { title: 'Dedicated workspace', icon: <Lamp /> },
    { title: 'Wifi', icon: <Wifi /> },
    { title: 'Free Parking', icon: <Car /> },
    { title: 'Exterior security cameras on property', icon: <Cctv /> },
  ];
  return (
    <div>
      <NavBar withImage={false}></NavBar>
      <div className="max-w-screen-xl m-8 mx-auto">
        <h1 className="text-2xl font-semibold capitalize">
          Sky Villa-Luxury lakeview Bungalow in City Center
        </h1>
        <ImageViewer></ImageViewer>
        <div className="grid w-full grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl capitalize">
              Entire bungalow in Udaipur, India
            </h2>
            <div className="flex items-center justify-around h-20 border border-gray-300 rounded-md">
              <div className="flex items-center gap-2">
                <LeftLeaf></LeftLeaf>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg font-semibold leading-3 tracking-tighter">
                    Guest's
                  </span>
                  <span className="text-lg font-semibold tracking-wide">
                    Favourite
                  </span>
                </div>
                <RightLeaf></RightLeaf>
              </div>
              <div className="flex flex-col font-semibold leading-tight tracking-wide">
                <span>One of the most loving platform</span>
                <span>on our platform.</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">5.0</span>
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
                <span className="text-lg font-bold">6</span>
                <span className="text-sm leading-tight underline">Reviews</span>
              </div>
              <div></div>
            </div>
            <p className="text-justify text-gray-700">
              Nestled atop a charming hill, with an unobstructed view of the
              lakes & enchanting city of Udaipur, Sky Villa, a 6-bedroom
              architectural masterpiece, offers a truly unique living
              experience. With a modern & vintage charm, it is located in a
              premium & traffic-free neighborhood. With multiple outdoor and
              indoor sitouts and 2 private terraces overlooking the lake , it
              offers majestic views of the Sunrise over lake Swaroop Sagar,
              sunset over Lake Fateh.
            </p>
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
            <div className="w-[70%] h-full mx-auto  rounded-md border border-gray-300/80 shadow-lg p-4">
              <div className="flex items-end gap-2">
                <span className="text-2xl font-semibold tracking-wider">
                  ₹9,820
                </span>
                <span>night</span>
              </div>
              <div class="grid grid-cols-2 border-black border mt-4 rounded-md">
                <div class="border-r border-b border-black p-4">
                  <div className="">
                    <div className="text-xs font-semibold uppercase">
                      Check-in
                    </div>
                    <span className="text-xs font-bold uppercase">
                      17/04/2024
                    </span>
                  </div>
                </div>
                <div class="border-b border-black p-4">
                  <div className="text-xs font-semibold uppercase">
                    CheckOut
                  </div>
                  <span className="text-xs font-bold uppercase">
                    21/04/2024
                  </span>
                </div>
                <div class="p-4">
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
                    <ModalForm closeModal={closeModal} totalprice={total}></ModalForm>
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
