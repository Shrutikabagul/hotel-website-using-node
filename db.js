const { configDotenv } = require("dotenv");
const mongoose=require("mongoose");
require(configDotenv);
//define mongodb connection url
//const mongoURL='mongodb://localhost:27017/hotels'//we can give any db name here
const mongoURL=process.env.mongoDBurl;
//setup mongodb connection
mongoose.connect(mongoURL,{
   useNewUrlParser:true,
   useUnifiedTopology:true 
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to mongodb server')
})
db.on('error',(err)=>{
    console.log('error to mongodb server',err)
})
db.on('diconnected',()=>{
    console.log('mongodb server is disconnected')
})

//export the db connection