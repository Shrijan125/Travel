import React from 'react';

const AdminButton = ({ constructive, text, handleClick }) => {
  return (
    <button
      className={`${constructive ? 'bg-green-500/80 ' : ' bg-red-500/80  text-white'} p-2 rounded-md`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default AdminButton;
