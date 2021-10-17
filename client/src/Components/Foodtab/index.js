import React, { useEffect, useState } from "react";
import {useParams, Link}from "react-router-dom";


import {MdDeliveryDining} from "react-icons/md";
import {GiWineBottle} from "react-icons/gi";
import {MdLocalDining} from "react-icons/md";
import classnames from "classnames";

const LargeTab = () => {
  const [allTypes ,setAllTypes]= useState([
    {
      id:`delivery`,
      imageDefalut:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name:"Delivery",
      activeColor: "yellow"
    },
    {
      id:`dining`,
      imageDefalut:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      name:"Dining Out",
      activeColor: "yellow"
    },
    {
      id:`night`,
      imageDefalut:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      name:"Night Life",
      activeColor: "yellow"
    }
  ]);
  const {type} = useParams();

return(
<>
<div className="hidden md:flex container py-10 px-20 mx-auto gap-16">
  {allTypes.map((items)=> (
  <Link to={`/${items.id}`}>

    <div className={classnames("flex items-center gap-3 pb-2 transition duration-700 ease-in-out",{"border-b-2 border-zomato-400":type===items.id, })}>
    <div className={`w-16 h-16 relative bg-auto bg-cover bg-${type=== items.id ? items.activeColor:"gray"}-100  rounded-full  justify-center py-1 border-${type=== items.id ? items.activeColor:"gray"}-100 md:border-8`}>

    <img src={type===items.id ? items.imageActive :items.imageDefalut}
    alt="delivery not selected" className="w-full h-full "/>

    </div>
    <h3 className= {type === items.id ? "text-xl text-Zomato-400 font-semibold": "text-xl text-gray-500 font-semibold"}> {items.name}</h3>
  </div>
  </Link>
 ))}
</div>
</>
);
};

const MobileTab = () => {

  const [allTypes ,setAllTypes]= useState([
    {
      id:`delivery`,
      icon:<MdDeliveryDining />,
      name:"Delivery",
      isActive: false
    },
    {
      id:`dining`,
      icon:<MdLocalDining />,
      name:"Dining Out",
      isActive: false
    },
    {
      id:`night`,
      icon:<GiWineBottle/>,
      name:"Night Life",
      isActive: false
    }
  ]);
  const {type} = useParams();


  return(
  <>
  <div className="lg:hidden bg-white shadow-inner p-3 fixed bottom-0 z-10 flex items-center justify-between md:justify-evenly gap-28  mx-0 text-gray-500 border">
    {
      allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div
                className={
                  type === items.id
                    ? "flex flex-col relative items-center text-xl text-zomato-400 mx-8 "
                    : "flex flex-col items-center text-xl mx-8 "}>
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400 transition duration-700 ease-in-out"
                  }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>
            </Link>
          ))}
  </div>
  </>
);
};

const FoodTab = () => {
  return (
    <>
      <div>
        <MobileTab />
        <LargeTab />
      </div>
    </>
  );
};
export default FoodTab;
