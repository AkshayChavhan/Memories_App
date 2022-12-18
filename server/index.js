import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";


// importing post routes
import postRoutes from "./routes/posts.js";

const app = express() ;

// utilizing post routes it means all posts routes will fired if we match localhost5000/posts
app.use("/posts" , postRoutes);

app.use(bodyParser.json({limit :'30mb' ,extended : true}));
app.use(bodyParser.urlencoded({limit :'30mb' ,extended : true}));
app.use(cors());



// to connect server with real database
// https://cloud.mongodb.com/cloud/atlas
// create a account
// click on Build a Cluster
// click on Shared cluster
// now go to database access and createa username and password  (akshaychavhan123)

// Now go for add IP address
// Click on connect to cluster 
// you will get link as mongodb+srv://akshaychavhan123:<password>@cluster0.fjmb3gn.mongodb.net/?retryWrites=true&w=majority


const CONNECTION_URL = "mongodb+srv://akshaychavhan123:akshaychavhan123@cluster0.fjmb3gn.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL , { useNewUrlParser : true , useUnifiedTopology : true})
    .then(() => app.listen(PORT ,() => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error))

// mongoose.set("useFindAndModify" ,false);
// mongoose.set('strictQuery', false);
