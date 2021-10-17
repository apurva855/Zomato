import { Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";


import HomeLayoutHOC from "./HOC/Home.HOC";
import Temp from "./Components/temp";
import Master from "./Components/master.js"
//import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
//import CheckoutLayoutHOC from "./HOC/Checkout.HOC";

//pages
//import Overview from "./Page/Restaurant/Overview";
function App() {
  return(
  <>
  <HomeLayoutHOC path="/" exact component={Temp}/>
  <HomeLayoutHOC path="/:type" exact component={Master}/>
  </>
)
}
export default App;
