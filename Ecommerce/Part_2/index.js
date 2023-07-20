const express = require("express"); 
const app = express() 
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const userRoute = require("./routes/user")

dotenv.config()
app.use(express.json())
mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("DBConnection Successful"))
.catch((err)=>{ 
console.log(err);
});

app.use("/api/users",userRoute);





app.listen(process.env.PORT || 5000 ,()=>{
    console.log("Back end running on port 5000")
})

//'3FiFWdjPbFxt4NT9'