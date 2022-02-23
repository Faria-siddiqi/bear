import React from 'react'
import AboutUs from './Screens/AboutUs/AboutUs';
import Heading from './Screens/Heading/Heading';
import Home from './Screens/Home/Home';
import Works from './Screens/Works/Works';

const App = () => {
  return (
    <Home>
      <div>
        <Heading />
        <AboutUs />
        <Works />
      </div>
    </Home>
  )
}

export default App;
