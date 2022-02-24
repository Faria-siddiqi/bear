import React from 'react'
import AboutUs from './Screens/AboutUs/AboutUs';
import Heading from './Screens/Heading/Heading';
import Home from './Screens/Home/Home';
import Works from './Screens/Works/Works';
import Team from './Screens/Team/Team';
import RoadMap from './Screens/RoadMap/RoadMap';
import Line from './Screens/Line/Line';
import Faqs from './Screens/Faqs/Faqs';
import RightLine from './Screens/RightLine/RightLine';
import Partners from './Screens/Partners/Partners';
import Footer from './Screens/Footer/Footer';

const App = () => {
  return (
    <Home>
      <div>
        <Heading />
        <AboutUs />
        <Works />
        <Team />
        <RoadMap />
        <Line />
        <Faqs />
        <RightLine />
        <Partners />
        <Footer />
      </div>
    </Home>
  )
}

export default App;
