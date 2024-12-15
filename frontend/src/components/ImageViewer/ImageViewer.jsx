import React from 'react';

const ImageViewer = () => {
  return (
    <div className="flex h-[600px] w-full gap-2 mt-6">
      <div className="w-[40%] h-full">
        <img
          src="src/assets/img1.avif"
          className="object-cover w-full h-full rounded-md"
        ></img>
      </div>
      <div className="h-full w-[30%] flex flex-col gap-4">
        <img className="rounded-md h-1/2" src="src/assets/img2.avif"></img>
        <img className="rounded-md h-1/2" src="src/assets/img3.avif"></img>
      </div>
      <div className="h-full w-[30%] flex flex-col gap-4">
        <img className="rounded-md h-1/2" src="src/assets/img4.avif"></img>
        <img className="rounded-md h-1/2" src="src/assets/img5.avif"></img>
      </div>
    </div>
  );
};

export default ImageViewer;
