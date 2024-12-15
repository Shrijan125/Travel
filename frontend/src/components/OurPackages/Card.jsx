import { Star } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="h-[400px] w-[350px]  rounded-md hover:cursor-pointer"
    >
      <div className="h-[60%] w-full overflow-hidden rounded-md">
        <img src="src/assets/udaipur.jpg" className="w-full h-full"></img>
      </div>
      <div className="flex flex-col justify-start w-full mt-3">
        <div className="flex flex-row justify-between">
          <span className="capitalize">Udaipur, India</span>
          <span className="flex items-center gap-2 text-lg capitalize">
            <Star size={14} className="fill-black"></Star> 5.0
          </span>
        </div>
        <div className="text-gray-500">City Views</div>
        <div className="text-gray-500">17-22 Dec</div>
        <div>
          <span className="font-bold">₹27,094</span> night
        </div>
      </div>
    </div>
  );
};

export default Card;
