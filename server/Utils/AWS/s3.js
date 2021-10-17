import AWS from "aws-sdk";
require("dotenv").config();
const s3Bucket = new AWS.S3({
  accessKeyId:process.env.AWS_ACCESS_ID ,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};













//AWS_S3_ACCESS_KEY=AKIARX5ZYFAW5F4QTTUU

//AWS_S3_SECRET_KEY=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
