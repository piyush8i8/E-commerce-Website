import mongoose from "mongoose";

// Define the order schema
const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Order processing" },
    date:{type:String,default:Date.now()},
    payment: { type: Boolean, default: false }, // Default to false if not provided
});

// Create the order model if it doesn't already exist
const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
