import mongoose from "mongoose";

// schema
const bookSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})


// mongoose.models.book -> when model already existed, otherwise create it (after ||)
const bookModel = mongoose.models.book || mongoose.model("book",bookSchema);

export default bookModel;