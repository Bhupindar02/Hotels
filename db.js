const mongoose = require('mongoose')

//define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/Hotels'

//set up mongoDB connection
mongoose.connect(mongoURL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

//get the default connection
const db = mongoose.connection;
//define eventlistner for db connection
db.on('connected',()=>{
    console.log('Connected to mongoDB server')
})
db.on('error',(err)=>{
    console.log('Connection error ',err)
})
db.on('disconnected',()=>{
    console.log(' mongoDB server disconnected')
})

//export db connection
module.exports= db;
    
 