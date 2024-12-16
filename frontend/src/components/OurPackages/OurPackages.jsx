import React from 'react';
import PackageImage from './PackageImage';

const OurPackages = () => {
  return (
    <div className="flex items-center justify-around mx-auto mt-4 max-w-screen-2xl sm:mt-16 md:mt-28 lg:mt-40 xl:mt-44">
      <div className="flex flex-col items-start gap-2">
        <h1 className="font-bold tracking-wider text-primary_button">
          Our Packages
        </h1>
        <span className="text-2xl font-black tracking-wider sm:text-4xl">
          Scroll Down <br className="xl:hidden"></br> to Explore
        </span>
        <span className="text-2xl font-black tracking-wider sm:text-4xl whitespace-nowrap">
          Our Exclusive <br className="xl:hidden"></br> Packages!
        </span>
      </div>
      <PackageImage></PackageImage>
    </div>
  );
};

export default OurPackages;
