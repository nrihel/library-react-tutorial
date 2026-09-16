import React from 'react';
import Landing from '../components/Landing.jsx';
import Highlights from '../components/Highlights.jsx';
import Featured from '../components/ui/Featured.jsx';
import Discounted from '../components/Discounted.jsx';
import Explore from '../components/Explore.jsx';

const Home = () => {
  return (
    <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
    </>
  );
};

export default Home;