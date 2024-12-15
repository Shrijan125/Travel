import React from 'react';
import Card from './Card';

const GridView = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mx-auto max-w-screen-2xl">
      <Card id={'123'}></Card>
    </div>
  );
};

export default GridView;
