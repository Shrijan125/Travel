import React from 'react';

const PackageImage = () => {
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 xl:w-96 xl:h-96">
      <img
        src="https://res.cloudinary.com/dkcnv8vgt/image/upload/v1734366667/pvo2mpqow76mkcq5pgng.png"
        className="absolute w-full h-full"
      ></img>
      <img src="https://res.cloudinary.com/dkcnv8vgt/image/upload/v1734366668/wobt5r9y6a97dsbivtyy.png" className="absolute p-6"></img>
      <img
        src="https://res.cloudinary.com/dkcnv8vgt/image/upload/v1734366666/eptnibmdrqbzfumglewd.png"
        className="absolute sm:w-[300px] sm:h-[350px] xl:w-[800px] sm:rotate-90 xl:h-[500px] xl:-top-4 sm:-z-10 -top-2"
      ></img>
    </div>
  );
};

export default PackageImage;
