import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <Slider/>
    </div>
  );
};

export default HomePage;
