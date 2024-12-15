import React from 'react';
import PackageImage from './PackageImage';

const OurPackages = () => {
  return (
    <div className="flex items-center justify-around mx-auto max-w-screen-2xl mt-44">
      <div className="flex flex-col items-start gap-2">
        <h1 className="font-bold tracking-wider text-primary_button">
          Our Packages
        </h1>
        <span className="text-4xl font-black tracking-wider">
          Scroll Down to Explore
        </span>
        <span className="text-4xl font-black tracking-wider">
          Our Exclusive Packages!
        </span>
      </div>
      <PackageImage></PackageImage>
    </div>
  );
};

export default OurPackages;
