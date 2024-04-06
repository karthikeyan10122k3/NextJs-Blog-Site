import  mongoose  from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDataBase = async() =>{
  
  const db = mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

}