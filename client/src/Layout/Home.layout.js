import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import  { useDispatch } from "react-redux";

import Navbar from "../Components/Navbar/index.js";
import FoodTab from "../Components/Foodtab/index.js";

//redux actions
import {getRestaurant} from "../Redux/Reducer/restaurant/restaurant.action";

const HomeLayout =(props) =>
{

  const dispatch = useDispatch();
  useEffect (()=> {
    dispatch(getRestaurant());
  }, []);
 return  <>
<div className= "container mx-auto md:px-2">
<Navbar/>
<FoodTab/>
 {props.children}

</div>

 </>
};
export default HomeLayout;
