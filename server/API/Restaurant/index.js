import express from "express";
import {RestaurantModel} from "../../database/allModels";

const Router = express.Router();
import {ValidateReastaurantCity, ValidateRestuarantSearchString} from "../../validation/restaurant";
import {ValidateReastaurantId} from "../../validation/food";
/*
Route            /
Des              Get all Restaurants details
Params           None
Access           Public
Method           GET
*/

Router.get("/", async(req,res) => {
  try{

    const {city} = req.query;
    const restaurants = await RestaurantModel.find({city});
    return res.json({restaurants});
  } catch(error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Route            /
Des              Get particular Restaurant details on id
Params           _id
Access           Public
Method           GET
*/

Router.get("/:_id", async(req,res) => {
  try {
    await ValidationRestaurantId(req.params);
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findOne(_id);

    if(!restaurant)
    return res.status(404).json({error: "Restaurant not found"});

    return res.json({restaurant});
  } catch(error) {
        return res.status(500).json({ error: error.message});
  }
});

/*
Route            /search
Des              Get particular Restaurant details on search
Params           none
body             searchString
Access           Public
Method           GET
*/
Router.get("/search", async(req, res) =>{
  try{
    await ValidateRestuarantSearchString(req.body);
    const{searchString} = req.body;

    const restaurants = await RestaurantModel.find({
      name:{$regex:searchString, $options:"i"}
    });
  }catch(error){
    return res.status(500).json({error:error.message});
  }
});

export default Router;
