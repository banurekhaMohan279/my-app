import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import Template from './components/Template';
import Suggestions from './components/Suggestions';
import Hide from './components/Hide';
//import Restaurants from './components/restaurants.js';
//import RestaurantDetails from './components/restaurantDetails.js';

export default function RoutesMap() {
  return(
      <Router>
        <Suspense fallback = {<div> Loading! </div>}>
            <Routes>
              <Route exact path = '/' element = {<Home/>} />
              <Route path = '/Suggestions' element = {<Template spec = 'Suggestions'/>} />
              <Route path = '/Hide' element = {<Template spec = 'Hide'/>}/>
            </Routes>
        </Suspense>
      </Router>
  )
}