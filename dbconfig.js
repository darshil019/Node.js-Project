const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://panditdarshil5454:sVr3ha3RkYF8iGfw@darshil.0okpl.mongodb.net/?retryWrites=true&w=majority&appName=Darshil')
.then(()=>{
    console.log("DATABASE SUCCESSFULLY CONNECTED")
})
.catch(()=>{
    console.log("DATABASE NOT SUCCESSFULLY CONNECTED")
})