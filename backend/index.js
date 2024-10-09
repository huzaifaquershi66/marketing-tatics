import dotenv from 'dotenv'

import connectdb from "./src/db/index.js";
import { app } from './app.js';

dotenv.config({
    path: "./.env"
})


connectdb()
.then(()=>{
app.listen(process.env.port||8000,()=>{
  console.log(`server is running at ${process.env.port}`)
})
})
.catch((err)=>{
console.log("mongodb connection failed",err)
})
