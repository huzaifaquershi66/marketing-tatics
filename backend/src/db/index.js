import mongoose from "mongoose";
import { dbname } from "../../dbname.js";
const connectdb = async ()=>{
try {
   const connectionj = await mongoose.connect(`${process.env.mongourl}/${dbname}`)
   console.log(`mongobd connected",${connectionj.connection.host}`)
} catch (error) {
    console.log("monodb error",error)
    process.exit(1)
}
}


export default connectdb