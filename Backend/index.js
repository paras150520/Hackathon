import express from 'express';
import dotenv from 'dotenv';
const app = express();
import mongoose from 'mongoose';

dotenv.config();

const  PORT = process.env.PORT || 4001;
const URI = process.env.URI;

//connect mongoose
try{
   mongoose.connect("mongodb://localhost:27017/travellers");
  console.log("mongo successfull");
}
catch(error){
     console.log("error",error);
}



app.listen(PORT,console.log(`server is listening on port ${PORT}`));