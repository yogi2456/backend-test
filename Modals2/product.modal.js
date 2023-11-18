import mongoose, {Schema} from "mongoose";

const product = new Schema({
    name: String,
    image: String,
    price: Number,
    Category: String
})

export default mongoose.model("Product", product)