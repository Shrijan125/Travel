import React from 'react';

const PackageImage = () => {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 xl:w-96 xl:h-96">
      <img
        src="src/assets/Ellipse 627.png"
        className="absolute w-full h-full"
      ></img>
      <img src="src/assets/sea.png" className="absolute p-6"></img>
      <img
        src="src/assets/bg_sea.png"
        className="absolute sm:w-[300px] sm:h-[350px] xl:w-[800px] sm:rotate-90 xl:h-[500px] xl:-top-4 sm:-z-10 -top-2"
      ></img>
    </div>
  );
};

export default PackageImage;
