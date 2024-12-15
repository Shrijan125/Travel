import React from 'react';

const Button = ({ button_text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="p-3 text-white capitalize rounded-md hover:cursor-pointer bg-primary_button"
    >
      {button_text}
    </button>
  );
};

export default Button;
