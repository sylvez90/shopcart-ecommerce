import React from 'react'
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import CategoryShowCase from './CategoryShowCase';
import Register from './Register';
import Location from './Location';
import AboutUs from './AboutUs';
import AppSection from './AppSection';
import Sponsor from './Sponsor';

export const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <Location/>
      <AboutUs/>
      <AppSection/>
      <Sponsor/>
    </div>
  )
}

export default Home;