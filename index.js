const express=require('express')
let cors=require('cors')
let app=express()
app.use(express.json())
app.use(cors())
require('dotenv').config()
require('./dbconfig')

const mainRoutes = require('./Routes/mainRoutes')
app.use('/main',mainRoutes)

app.listen(5001,(err)=>{
    if(!err){
        console.log('server started at 5001 port')
    }
    else{
        console.log('server not started at 5001 port',err)
    }
})