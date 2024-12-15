import React from 'react';

const PackageImage = () => {
  return (
    <div className="relative w-96 h-96">
      <img
        src="src/assets/Ellipse 627.png"
        className="absolute w-full h-full"
      ></img>
      <img src="src/assets/sea.png" className="absolute p-6"></img>
      <img
        src="src/assets/bg_sea.png"
        className="absolute w-[800px] rotate-90 h-[500px] -top-4 -z-10"
      ></img>
    </div>
  );
};

export default PackageImage;
