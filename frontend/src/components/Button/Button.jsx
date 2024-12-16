import React from 'react';

const Button = ({ button_text, handleClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className="p-2 text-white capitalize rounded-md whitespace-nowrap sm:p-3 hover:cursor-pointer bg-primary_button disabled:cursor-not-allowed"
    >
      {button_text}
    </button>
  );
};

export default Button;
