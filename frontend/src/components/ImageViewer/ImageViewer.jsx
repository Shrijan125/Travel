import React from 'react';

const ImageViewer = ({images}) => {
  return (
    <div className="flex h-[600px] w-full gap-2 mt-6">
      <div className="sm:w-[40%] w-full h-full">
        <img
          src={images[0]}
          className="object-cover w-full h-full rounded-md"
        ></img>
      </div>
      <div className=" h-full w-[30%] hidden sm:flex flex-col gap-4">
        {images[1] && <img className="rounded-md h-1/2" src={images[1]}></img>}
        {images[2] && <img className="rounded-md h-1/2" src={images[2]}></img>}
      </div>
      <div className="h-full w-[30%] hidden sm:flex flex-col gap-4">
        {images[3] && <img className="rounded-md h-1/2" src={images[3]}></img>}
        {images[4] && <img className="rounded-md h-1/2" src={images[4]}></img>}
      </div>
    </div>
  );
};

export default ImageViewer;
