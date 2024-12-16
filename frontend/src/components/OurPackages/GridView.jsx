import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { BASE_URL } from '../../contants';
import toast from 'react-hot-toast';

const GridView = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + '/packages')
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        toast(error.message);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 mt-0 place-items-center xl:gap-5 sm:mt-16 xl:mt-0 sm:grid-cols-2 xl:grid-cols-4">
      {data.map((element, index) => {
        return (
          <Card
            id={element._id}
            title={element.title}
            description={element.description.split(' ').slice(0, 2).join(' ')}
            image={element.images[0]}
            key={index}
            price={element.price}
            startDate={element.startavailableDate}
            endDate={element.endavailableDate}
          ></Card>
        );
      })}
    </div>
  );
};

export default GridView;
