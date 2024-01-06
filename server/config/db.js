const mongoose= require('mongoose');
mongoose.set('strictQurey',false);
const connectDB= async()=>{
  try{
    const conn= await mongoose.connection(process.env.MOGODB_URI);
      console.log(`Database conected:${conn.connection.host}`)
  }
}