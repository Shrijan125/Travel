import React from 'react';
import Button from '../Button/Button';

const NavBar = ({ withImage }) => {
  const nav_items = ['Home', 'About', 'Services', 'Upcoming Packages'];
  return (
    <div className="relative w-screen h-full">
      {withImage && (
        <div className="absolute top-0 -z-10">
          <img
            src="src/assets/landing_page.png"
            className="object-cover w-full"
          ></img>
        </div>
      )}
      <nav className="flex items-center justify-around p-4 bg-gradient-to-t from-blue-500/80 to-blue-400">
        {' '}
        <div className="w-[100px]">
          <img src="src/assets/logo.png" className="object-cover"></img>
        </div>
        <ul className="flex gap-6">
          {nav_items.map((item, index) => {
            return (
              <li
                key={index}
                className="text-lg tracking-wide text-white select-none hover:cursor-pointer"
              >
                <div className="p-2">{item}</div>
              </li>
            );
          })}
        </ul>
        <Button button_text={'Get In Touch'}></Button>
      </nav>
      {withImage && (
        <div className="z-10 mt-40 text-white">
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold uppercase">Read</div>
            <div className="text-[200px] capitalize font-yesteryear">
              about Us
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
