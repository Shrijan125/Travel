import { Star } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getMonths } from '../../../../backend/src/utils/constants';

const Card = ({ id, title, description, image, price, startDate, endDate }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${id}`);
  };

  const formatDate = (startDate, endDate) => {
    const startday = startDate[0] + startDate[1];
    const endday = endDate[0] + endDate[1];
    const monthIndex = parseInt(startDate[3] + startDate[4]) || 0;
    const month = getMonths(monthIndex - 1);
    return `${startday}-${endday} ${month}`;
  };

  return (
    <div
      onClick={handleClick}
      className="sm:h-[400px] sm:w-[350px] h-[300px] w-[350px] sm:mt-0 mt-8 sm:mx-0 rounded-md hover:cursor-pointer"
    >
      <div className="h-[60%] w-full overflow-hidden rounded-md">
        <img src={image} className="w-full h-full"></img>
      </div>
      <div className="flex flex-col justify-start w-full mt-3">
        <div className="flex flex-row justify-between">
          <span className="capitalize">{title}</span>
          <span className="flex items-center gap-2 text-lg capitalize">
            <Star size={14} className="fill-black"></Star> 5.0
          </span>
        </div>
        <div className="text-gray-500">{description}</div>
        <div className="text-gray-500">{formatDate(startDate, endDate)}</div>
        <div>
          <span className="font-bold">₹{price}</span> night
        </div>
      </div>
    </div>
  );
};

export default Card;
