import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import OurPackages from '../components/OurPackages/OurPackages';
import GridView from '../components/OurPackages/GridView';
const HomePage = () => {
  return (
    <div>
      <NavBar withImage={true}></NavBar>
      <OurPackages></OurPackages>
      <GridView></GridView>
    </div>
  );
};

export default HomePage;
