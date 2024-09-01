import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import connectDB from "./config/db.js"; // Fixed the path to follow lowercase convention
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
const app = express();
const port = process.env.PORT || 4000;

// Middleware setup
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Route handlers
app.use("/api/product", productRouter);
app.use("/images", express.static('uploads')); // Serve static files from 'uploads' directory
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Piyush");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
