import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import App from './components/App';
import Hide from './components/Hide';
//import Restaurants from './components/restaurants.js';
//import RestaurantDetails from './components/restaurantDetails.js';

export default function RoutesMap() {
  return(
      <Router>
        <Suspense fallback = {<div> Loading! </div>}>
            <Routes>
              <Route exact path = '/' element = {<App/>} >
                
              </Route>
              <Route path = '/Hide' element = {<Hide />}/>
            </Routes>
        </Suspense>
      </Router>
  )
}