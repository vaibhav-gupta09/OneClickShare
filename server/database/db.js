import mongoose from 'mongoose';
 
const DBConnection = async ()=>{
  const MONGODB_URI = `mongodb://vaibhav:E9wuK7AWjDMgIkEB@cluster0-shard-00-00.xs4bl.mongodb.net:27017,cluster0-shard-00-01.xs4bl.mongodb.net:27017,cluster0-shard-00-02.xs4bl.mongodb.net:27017/?ssl=true&replicaSet=atlas-13eahv-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try{
    await mongoose.connect(MONGODB_URI,  {useNewUrlParser: true}) 
    console.log('DB Connection sucess')  
  } catch(error){
    console.error('Error while connecting with database ', error.message);
  }
}

export default DBConnection