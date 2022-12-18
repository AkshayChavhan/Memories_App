import mongoose from "mongoose";

// creating mongoose schema
const postSchema = mongoose.Schema({
    title : String ,
    message : String ,
    creator : String ,
    tags : [String] ,
    selectedFile : String ,
    likeCOunt : {
        type : Number ,
        default : 0
    },
    createdAt: {
        type : Date ,
        default : new Date() ,
    }
});

// to turn schema into model
const PostMessage = mongoose.model("PostMessage" , postSchema);

export default PostMessage ;