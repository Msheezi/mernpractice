const mongoose = require("mongoose");

const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const User = require('./models/User')
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const bodyParser = require('body-parser')

mongoose
.connect(db,{useNewUrlParser:true})
.then(()=> console.log("Connected to MongoDB successfully"))
.catch(err=> console.log(err));

app.get("/", (req,res)=>{
    // console.log(res)  //This is here to trigger the node debugging console, make sure you are using the debug version of the server
    // can also put a debugger here
    // const user = new User({
    //     handle: "jim",
    //     email: "jimjhim",
    //     password: "password"
    // })
    // user.save()
    res.send("Hello World")});
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));