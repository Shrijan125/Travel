import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { BASE_URL } from '../../contants';
import toast from 'react-hot-toast';

const GridView = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortedData, setSortedData] = useState([]);
  const itemsPerPage = 4;

  useEffect(() => {
    axios
      .get(BASE_URL + '/packages')
      .then((response) => {
        setData(response.data.data);
        setSortedData(response.data.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);

  useEffect(() => {
    let filteredData = [...data];
    
    if (minPrice !== '' || maxPrice !== '') {
      filteredData = filteredData.filter((item) => {
        const price = parseFloat(item.price);
        const min = minPrice === '' || price >= parseFloat(minPrice);
        const max = maxPrice === '' || price <= parseFloat(maxPrice);
        return min && max;
      });
    }
    
    setSortedData(filteredData);
  }, [minPrice, maxPrice, data]);

  const handleSort = (sortOrder) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (sortOrder === 'highest') {
        return parseFloat(b.price) - parseFloat(a.price);
      } else {
        return parseFloat(a.price) - parseFloat(b.price);
      }
    });
    setSortedData(sorted);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div>
      <div className="flex justify-between px-4 mt-10">
        <div className='flex flex-col gap-2 mx-auto mb-8 sm:flex-row'>
        <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="px-4 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="px-4 py-2 border rounded"
          />
          <button
            onClick={() => handleSort('highest')}
            className="px-4 py-2 text-white rounded bg-primary_button"
          >
            Sort by Highest Price
          </button>
          <button
            onClick={() => handleSort('lowest')}
            className="px-4 py-2 text-white rounded bg-primary_button"
          >
            Sort by Lowest Price
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-0 place-items-center xl:gap-5 sm:mt-16 xl:mt-0 sm:grid-cols-2 xl:grid-cols-4">
        {currentItems.map((element, index) => {
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

      <div className="flex justify-center mt-4 mb-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 text-white rounded bg-primary_button"
        >
          Previous
        </button>
        <span className="px-4 py-2">{`${currentPage} / ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 ml-2 text-white rounded bg-primary_button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GridView;
