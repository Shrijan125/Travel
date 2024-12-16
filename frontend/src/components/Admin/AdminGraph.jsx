import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../contants';
import toast from 'react-hot-toast';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import PackageDetailsCard from './PackageDetailsCard';

const AdminGraph = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxBookedPackage, setMaxBookedPackage] = useState({});
  const [minBookedPackage, setMinBookedPackage] = useState({});
  const [groupedByPackageArray, setGroupedByPackageArray] = useState([]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { packageId, travellers } = payload[0].payload;
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: '#333',
            padding: '5px',
            borderRadius: '5px',
          }}
        >
          <p style={{ color: '#fff' }}>Package ID: {packageId}</p>
          <p style={{ color: '#fff' }}>Travellers: {travellers}</p>
        </div>
      );
    }
    return null;
  };
  useEffect(() => {
    axios
      .get(BASE_URL + '/bookings')
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const groupedByPackage = data.reduce((acc, curr) => {
        const { packageId, numberofTravellers } = curr;
        if (!acc[packageId]) {
          acc[packageId] = 0;
        }
        acc[packageId] += numberofTravellers;
        return acc;
      }, {});

      const groupedArray = Object.entries(groupedByPackage).map(
        ([key, value]) => ({
          packageId: key,
          travellers: value,
        }),
      );

      setGroupedByPackageArray(groupedArray);

      const maxBookedPackageId = Object.entries(groupedByPackage).reduce(
        (max, current) => (current[1] > max[1] ? current : max),
        ['', 0],
      );

      const minBookedPackageId = Object.entries(groupedByPackage).reduce(
        (min, current) => (current[1] < min[1] ? current : min),
        ['', Infinity],
      );

      axios
        .get(BASE_URL + `/packages/${maxBookedPackageId[0]}`)
        .then((response) => setMaxBookedPackage(response.data.data))
        .catch((error) => toast.error(error.message));

      axios
        .get(BASE_URL + `/packages/${minBookedPackageId[0]}`)
        .then((response) => setMinBookedPackage(response.data.data))
        .catch((error) => toast.error(error.message));
    }
  }, [data]);

  if (loading) {
    return <div className="mt-4 text-xl text-white">Loading...</div>;
  }

  return (
    <div className="mt-4 text-xl text-white">
      <h1>Booking Analytics</h1>
      <div className="flex flex-row gap-4 mt-4">
        <PackageDetailsCard
          cardDesc={'Max Booked Package'}
          description={maxBookedPackage.description || ''}
          title={maxBookedPackage.title || ''}
          price={maxBookedPackage.price || ''}
        />
        <PackageDetailsCard
          cardDesc={'Min Booked Package'}
          description={minBookedPackage.description || ''}
          title={minBookedPackage.title || ''}
          price={minBookedPackage.price || ''}
        />
        <BarChart width={900} height={300} data={groupedByPackageArray}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="travellers" fill="#DF6951" />
        </BarChart>
      </div>
    </div>
  );
};

export default AdminGraph;
