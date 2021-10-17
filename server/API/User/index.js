import express from "express";
import {UserModel} from "../../database/allModels";

const Router = express.Router();
/*
Route            /new
Des             get user data
Params           _id
Access           Public
Method           GET
*/
Router.get("/:_id", async(req,res) =>{
  try {
    const {_id} = req.params;
    const getUser = await UserModel.findById(_id);

  return res.json({user:getUser});

  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});

/*
Route            /update
Des             update user data
Params           _id
body              user data
Access           Public
Method           PUT
*/
Router.put("/update/:_userId", async(req,res) =>{
  try {
    const {userId} = req.params;
    const {userData}= req.body;
    const updateUserdata  await UserModel.findByIAndUpdate(
      userId,
      {
        set:userData
      },
      {
        new:true
      }
    );
  return res.json({user:updateUserdata});

  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});
export default Router;
