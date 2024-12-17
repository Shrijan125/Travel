import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const NavBar = ({ withImage }) => {
  const nav_items = ['Home', 'About', 'Services', 'Upcoming Packages'];
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full ">
      {withImage && (
        <div className="absolute top-0 -z-10">
          <img
            src="https://res.cloudinary.com/dkcnv8vgt/image/upload/v1734366669/mr7qzngcvtz3lny9rw0i.png"
            className="object-cover w-full"
          ></img>
        </div>
      )}
      <nav
        className={`flex items-center justify-between sm:justify-around p-4 ${!withImage && 'bg-gradient-to-t from-blue-500/80 to-blue-400'}`}
      >
        {' '}
        <Menu className="sm:hidden" color="#FFF" size={30}></Menu>
        <div className="lg:w-[100px] w-[80px] sm:block hidden">
          <img
            src="https://res.cloudinary.com/dkcnv8vgt/image/upload/v1734366667/iu549pmst9d1znuhycht.png"
            onClick={() => {
              navigate('/');
            }}
            className="object-cover hover:cursor-pointer"
          ></img>
        </div>
        <ul className="hidden lg:gap-3 xl:gap-6 sm:flex">
          {nav_items.map((item, index) => {
            return (
              <li
                onClick={() => {
                  navigate('/');
                }}
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
        <div className="z-10 -mt-5 text-white sm:mt-10 xl:mt-40">
          <div className="flex flex-col items-center">
            <div className="text-lg font-bold uppercase">Read</div>
            <div className="xl:text-[200px] text-[70px]  capitalize font-yesteryear">
              about Us
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
