import React from 'react';

const PackageDetailsCard = ({ title, description, price, cardDesc }) => {
  return (
    <div className="border rounded-md border-gray-300 h-[270px] w-[300px] flex flex-col shadow-sm items-center p-4 shadow-gray-200">
      <h1>{cardDesc}</h1>
      <div className="flex flex-col items-start w-full mt-3">
        <div>Title : {title}</div>
        <div>Description : {description.split(' ').slice(0, 5).join(' ')}</div>
        <div>Price : ₹ {price}</div>
      </div>
    </div>
  );
};

export default PackageDetailsCard;
